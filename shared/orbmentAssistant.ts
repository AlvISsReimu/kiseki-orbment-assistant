import type { ElementType } from './enums/elementType'
import { getCharacterById, type CharacterId } from './model/character'
import type { Core } from './model/core'
import type { QuartzId } from './model/quartz'
import type { QuartzLine } from './model/quartzLine'
import type { ScoreMaps } from './model/scoreMaps'
import { SimulatedAnnealing } from './utils/simulatedAnnealing/simulatedAnnealing'

/**
 * FE should provide these parameters to calculate the optimal orbment setup.
 */
export interface OrbmentAssistantInput {
  // either characterId or customizedCore should be provided
  characterId?: CharacterId
  customizedCore?: Core
  scoreMaps: ScoreMaps
  bannedQuartzIds?: QuartzId[]

  // SAA parameters, all optional
  initTemperature?: number
  coolingRate?: number
  endTemperature?: number
  balance?: number
  maxIteration?: number
  maxNoChangeIteration?: number
  resultSizeLimit?: number
}

type ResultLine = {
  slots: number[]
  elements: Record<ElementType, number>
  fulfilledShardSkills: number[]
}

export type OrbmentAssistantResult = {
  bestResults: {
    weaponLine: ResultLine
    shieldLine: ResultLine
    driveLine: ResultLine
    extraLine: ResultLine
  }[]
  bestScore: number
}

/**
 * FE calls this function to calculate the optimal orbment setup.
 * @param input
 * @returns
 */
export const calcOptimalOrbmentSetup = (
  input: OrbmentAssistantInput,
): OrbmentAssistantResult => {
  const saaResult = runSimulatedAnnealing(input)
  const bestResults = saaResult.bestResults.map(bestResult => {
    const weaponLine = _convertQuartzLineToResultLine(bestResult.weaponLine)
    const shieldLine = _convertQuartzLineToResultLine(bestResult.shieldLine)
    const driveLine = _convertQuartzLineToResultLine(bestResult.driveLine)
    const extraLine = _convertQuartzLineToResultLine(bestResult.extraLine)
    return { weaponLine, shieldLine, driveLine, extraLine }
  })
  const bestScore = saaResult.bestScore
  return { bestResults, bestScore } as OrbmentAssistantResult
}

export const runSimulatedAnnealing = (input: OrbmentAssistantInput) => {
  if (input.characterId == null && !input.customizedCore) {
    throw new Error('Either characterId or customizedCore should be provided')
  }
  let core: Core | null = null
  if (input.characterId != null) {
    const character = getCharacterById(input.characterId)
    core = character?.core ?? input.customizedCore ?? null
  }
  if (!core) {
    throw new Error('Failed to get holo core')
  }

  const standardizedScoreMaps = input.scoreMaps.normalize()

  const simulatedAnnealing = new SimulatedAnnealing<Core>({
    init: () => core,
    neighbor: (current: Core) => {
      const cloned = current.deepCopy()
      cloned.addOrReplaceRandomQuartz(input.bannedQuartzIds)
      return cloned
    },
    fitness: (current: Core) => current.calcScore(standardizedScoreMaps),
    initTemperature: input.initTemperature,
    coolingRate: input.coolingRate,
    endTemperature: input.endTemperature,
    balance: input.balance,
    maxIteration: input.maxIteration,
    maxNoChangeIteration: input.maxNoChangeIteration,
    resultSizeLimit: input.resultSizeLimit,
  })

  return simulatedAnnealing.run()
}

const _convertQuartzLineToResultLine = (quartzLine: QuartzLine): ResultLine => {
  const slots = [...quartzLine.regularSlotQuartzIds]
  // insert quartz that is in elment-limited slot into slots in ResultLine
  quartzLine.elementLimitedSlots
    .filter(elementLimitedSlot => elementLimitedSlot.hasQuartz())
    .forEach((elementLimitedSlot, i) => {
      slots.splice(i, 0, elementLimitedSlot.quartzId)
    })

  const elements: Record<ElementType, number> = {} as Record<
    ElementType,
    number
  >
  quartzLine.calcSumElementalValues().forEach((value, key) => {
    elements[key] = value
  })

  const fulfilledShardSkills = quartzLine
    .analyzeCurrentShardSkills()
    .map(shardSkill => shardSkill.id)

  return {
    slots,
    elements,
    fulfilledShardSkills,
  } as ResultLine
}
