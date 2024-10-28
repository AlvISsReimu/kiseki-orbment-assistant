import { LanguageCode } from '@shared/enums/languageCode'
import { getCharacterIdByName } from '@shared/model/character'
import { calcOptimalOrbmentSetup } from '@shared/orbmentAssistant'
import { expect, test } from 'vitest'
import { getScoreMapsForTesting } from './utils'

test('Run simulated annealing algorithm to get optimal quartz setup', () => {
  const result = calcOptimalOrbmentSetup({
    characterId: getCharacterIdByName('カトル', LanguageCode.JA),
    scoreMaps: getScoreMapsForTesting(),
    bannedQuartzIds: [],
    initTemperature: 50,
    coolingRate: 0.98,
    endTemperature: 1,
    balance: 20,
    maxIteration: 100,
    maxNoChangeIteration: 10,
    resultSizeLimit: 5,
  })
  const { bestResults, bestScore } = result

  expect(bestScore).toBeGreaterThan(0)
  expect(bestResults.length).toBeGreaterThan(0)
})
