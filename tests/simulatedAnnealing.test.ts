import { LanguageCode } from '@shared/enums/languageCode'
import { getCharacterIdByName } from '@shared/model/character'
import type { Core } from '@shared/model/core'
import { getQuartzById, getQuartzIdByName } from '@shared/model/quartz'
import { getShardSkillById } from '@shared/model/shardSkill'
import {
  runSimulatedAnnealing,
  type OrbmentAssistantInput,
} from '@shared/orbmentAssistant'
import type { SimulatedAnnealingResult } from '@shared/utils/simulatedAnnealing/simulatedAnnealing'
import { expect, test } from 'vitest'
import { getScoreMapsForTesting } from './utils'

test('Run simulated annealing algorithm to get optimal quartz setup', async () => {
  const isGithubAction = process.env.GITHUB_ACTIONS === 'true'
  const languageCode = LanguageCode.JA
  const scoreMaps = getScoreMapsForTesting()
  const orbmentAssistantInput = {
    characterId: getCharacterIdByName('カトル', languageCode),
    scoreMaps,
    bannedQuartzIds: [
      getQuartzIdByName('紅耀珠', languageCode),
      getQuartzIdByName('攻撃3', languageCode),
    ],
    initTemperature: isGithubAction ? 1000 : 50,
    coolingRate: isGithubAction ? 0.99 : 0.98,
    endTemperature: isGithubAction ? 1e-2 : 1,
    balance: isGithubAction ? 812 : 20,
    maxIteration: isGithubAction ? 1200 : 100,
    maxNoChangeIteration: isGithubAction ? 20 : 10,
    resultSizeLimit: isGithubAction ? 10 : 5,
  } as OrbmentAssistantInput

  const { bestResults, bestScore } = runSimulatedAnnealing(
    orbmentAssistantInput,
    false,
  ) as SimulatedAnnealingResult<Core>
  expect(bestScore).toBeGreaterThan(0)
  expect(bestResults.length).toBeGreaterThan(0)

  // print the result
  let originalScore = 0
  if (bestResults.length > 0) {
    originalScore = bestResults[0].calcScore(scoreMaps)
  }
  console.log(
    `result size: ${bestResults.length}, normalized score: ${bestScore}, original score: ${originalScore}`,
  )
  for (let i = 0; i < 1; i++) {
    // only print the first result for now
    const core = bestResults[i]
    console.log(`result ${i + 1}:\n${core.toString(languageCode)}`)
    console.log('Missed quartz:')
    console.log(
      core
        .getMissedQuartzIds(scoreMaps.quartzScores)
        .map(id => getQuartzById(id).name_i18n[languageCode]),
    )
    console.log('Missed shard skills:')
    console.log(
      core
        .getMissedShardSkillIds(scoreMaps.shardSkillScores)
        .map(id => getShardSkillById(id).name_i18n[languageCode]),
    )
  }
})
