import { ALL_QUARTZ } from '@shared/constants/quartz'
import { ElementType } from '@shared/enums/elementType'
import { LanguageCode } from '@shared/enums/languageCode'
import { Core } from '@shared/model/core'
import { getQuartzIdByName, type QuartzId } from '@shared/model/quartz'
import {
  DriveLine,
  ExtraLine,
  ShieldLine,
  WeaponLine,
} from '@shared/model/quartzLine'
import { getShardSkillIdByName } from '@shared/model/shardSkill'
import {
  createElementLimitedSlot,
  ElementLimitedSlot,
} from '@shared/model/slot'
import { expect, test } from 'vitest'
import { getFullCoreForTesting, getScoreMapsForTesting } from './utils'

test('Add a deterministic quartz to a random line in the core', () => {
  const core = new Core(
    new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Earth, 2)]),
    new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Earth, 1)]),
    new DriveLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
    new ExtraLine(3, [], []),
  )
  const blacklistIds = Array.from(
    { length: ALL_QUARTZ.length },
    (_, i) => i,
  ) as QuartzId[]
  const quartzId = getQuartzIdByName('卡利俄佩', LanguageCode.ZH_CN)
  blacklistIds.splice(quartzId, 1)
  core.addOrReplaceRandomQuartz(blacklistIds)
  expect(core.getFlattenedQuartzIds()).toContain(quartzId)
})

test('Remove a quartz from the regular slot in the core', () => {
  const quartzId = getQuartzIdByName('卡利俄佩', LanguageCode.ZH_CN)
  const core = new Core(
    new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Earth, 2)]),
    new ShieldLine(
      4,
      [quartzId],
      [createElementLimitedSlot(ElementType.Earth, 1)],
    ),
    new DriveLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
    new ExtraLine(3, [], []),
  )
  core.removeQuartz(quartzId)
  expect(core.shieldLine.getFlattenedQuartzIds()).not.toContain(quartzId)
})

test('Remove a quartz from the element limited slot in the core', () => {
  const quartzId = getQuartzIdByName('卡利俄佩', LanguageCode.ZH_CN)
  const core = new Core(
    new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Earth, 2)]),
    new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
    new DriveLine(
      4,
      [],
      [new ElementLimitedSlot(ElementType.Water, 1, quartzId)],
    ),
    new ExtraLine(3, [], []),
  )
  core.removeQuartz(quartzId)
  expect(core.shieldLine.getFlattenedQuartzIds()).not.toContain(quartzId)
})

test('Calculate score of the core', () => {
  const core = getFullCoreForTesting()
  const scoreMaps = getScoreMapsForTesting()
  const score = core.calcScore(scoreMaps)
  expect(score).toEqual(161)
})

test('Get the flattened quartz ids in the core', () => {
  const core = getFullCoreForTesting()
  const flattenedQuartzIds = core.getFlattenedQuartzIds()
  expect(flattenedQuartzIds.length).toEqual(15)
  expect(flattenedQuartzIds).toContain(core.weaponLine.regularSlotQuartzIds[0])
  expect(flattenedQuartzIds).not.toContain(
    getQuartzIdByName('行動力2', LanguageCode.JA),
  )
})

test('Get the flattened shard skill ids in the core', () => {
  const languageCode = LanguageCode.JA
  const core = getFullCoreForTesting()
  const flattenedShardSkillIds = core.getFlattenedShardSkillIds()
  expect(flattenedShardSkillIds.length).toEqual(33)
  expect(flattenedShardSkillIds).toContain(
    getShardSkillIdByName('ヘブンリーラック', languageCode),
  )
  expect(flattenedShardSkillIds).not.toContain(
    getShardSkillIdByName('エナジーチャージャーII', languageCode),
  )
})

test('Get missed quartz ids in the core', () => {
  const languageCode = LanguageCode.JA
  const core = getFullCoreForTesting()
  const scoreMaps = getScoreMapsForTesting()
  const missedQuartzIds = core.getMissedQuartzIds(scoreMaps.quartzScores)
  expect(missedQuartzIds.length).toEqual(12)
  expect(missedQuartzIds).toContain(getQuartzIdByName('水霊の詩', languageCode))
  expect(missedQuartzIds).toContain(
    getQuartzIdByName('ハヌマーン', languageCode),
  )
  expect(missedQuartzIds).toContain(getQuartzIdByName('行動力1', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('行動力2', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('駆動1', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('駆動2', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('省EP1', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('省EP2', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('省EP3', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('精神1', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('精神2', languageCode))
  expect(missedQuartzIds).toContain(getQuartzIdByName('月霊の詩', languageCode))
})

test('Get missed shard skill ids in the core', () => {
  const languageCode = LanguageCode.JA
  const core = getFullCoreForTesting()
  const scoreMaps = getScoreMapsForTesting()
  const missedShardSkillIds = core.getMissedShardSkillIds(
    scoreMaps.shardSkillScores,
  )
  expect(missedShardSkillIds.length).toEqual(5)
  expect(missedShardSkillIds).toContain(
    getShardSkillIdByName('マインドクラッカー改', languageCode),
  )
  expect(missedShardSkillIds).toContain(
    getShardSkillIdByName('アークフェザー改', languageCode),
  )
  expect(missedShardSkillIds).toContain(
    getShardSkillIdByName('カタラクトゲインII', languageCode),
  )
  expect(missedShardSkillIds).toContain(
    getShardSkillIdByName('ヘブンリーラックII', languageCode),
  )
  expect(missedShardSkillIds).toContain(
    getShardSkillIdByName('エナジーチャージャーII', languageCode),
  )
})
