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
import { ScoreMaps } from '@shared/model/scoreMaps'
import {
  getShardSkillIdByName,
  type ShardSkillId,
} from '@shared/model/shardSkill'
import {
  createElementLimitedSlot,
  ElementLimitedSlot,
} from '@shared/model/slot'
import { expect, test } from 'vitest'

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
  const core = _getFullCoreForTesting()
  const scoreMaps = _getScoreMapsForTesting()
  const score = core.calcScore(scoreMaps)
  expect(score).toEqual(161)
})

const _getFullCoreForTesting = (): Core => {
  const languageCode = LanguageCode.JA
  /**
   * [黒耀珠, 行動力3, デイダラボッチ*, 駆動3] (14, 0, 0, 0, 20, 10, 0) (アースインパクトII, クロノインパクトII, ゴルトインパクトII, シールドブレイカー改, フェイタルランサー改)
   * [金耀珠, ゴリアテ*, カリオペ, 精神3] (10, 5, 0, 0, 6, 11, 6) (アクアレジスト, ダークレジスト, カオスレジスト, アースレジストII, ゴルトレジストII, リカバーガード, Aクレストガード, カバーシールド, セラフィムフォース)
   * [銀耀珠, 蒼氷の詩, クロートー*, 不屈] (10, 8, 0, 5, 0, 14, 8) (ゲイルブースト, アースブーストII, アクアブーストII, ゴルトブーストII, カオスブーストII, マインドクラッカー, スピリットクラッカー改, アークフェザー, カタラクトゲイン)
   * [コノハナサクヤ, ヘカテー, 朧月の詩] (0, 7, 0, 0, 7, 5, 10) (エナジースターター, クイックスターター, アーツスターター, ファントムスターターII, ゴールデンアイ, レッグブレイカー, 破迅の強襲, オートクイック, エナジーチャージャー, ヘブンリーラック)
   */

  const quartzId_1_1 = getQuartzIdByName('黒耀珠', languageCode)
  const quartzId_1_2 = getQuartzIdByName('行動力3', languageCode)
  const quartzId_1_3 = getQuartzIdByName('駆動3', languageCode)
  const quartzId_1_L = getQuartzIdByName('デイダラボッチ', languageCode)

  const quartzId_2_1 = getQuartzIdByName('金耀珠', languageCode)
  const quartzId_2_2 = getQuartzIdByName('カリオペ', languageCode)
  const quartzId_2_3 = getQuartzIdByName('精神3', languageCode)
  const quartzId_2_L = getQuartzIdByName('ゴリアテ', languageCode)

  const quartzId_3_1 = getQuartzIdByName('銀耀珠', languageCode)
  const quartzId_3_2 = getQuartzIdByName('蒼氷の詩', languageCode)
  const quartzId_3_3 = getQuartzIdByName('不屈', languageCode)
  const quartzId_3_L = getQuartzIdByName('クロートー', languageCode)

  const quartzId_4_1 = getQuartzIdByName('コノハナサクヤ', languageCode)
  const quartzId_4_2 = getQuartzIdByName('ヘカテー', languageCode)
  const quartzId_4_3 = getQuartzIdByName('朧月の詩', languageCode)

  return new Core(
    new WeaponLine(
      4,
      [quartzId_1_1, quartzId_1_2, quartzId_1_3],
      [new ElementLimitedSlot(ElementType.Earth, 2, quartzId_1_L)],
    ),
    new ShieldLine(
      4,
      [quartzId_2_1, quartzId_2_2, quartzId_2_3],
      [new ElementLimitedSlot(ElementType.Earth, 1, quartzId_2_L)],
    ),
    new DriveLine(
      4,
      [quartzId_3_1, quartzId_3_2, quartzId_3_3],
      [new ElementLimitedSlot(ElementType.Space, 2, quartzId_3_L)],
    ),
    new ExtraLine(3, [quartzId_4_1, quartzId_4_2, quartzId_4_3], []),
  )
}

test('Get the flattened quartz ids in the core', () => {
  const core = _getFullCoreForTesting()
  const flattenedQuartzIds = core.getFlattenedQuartzIds()
  expect(flattenedQuartzIds.length).toEqual(15)
  expect(flattenedQuartzIds).toContain(core.weaponLine.regularSlotQuartzIds[0])
  expect(flattenedQuartzIds).not.toContain(
    getQuartzIdByName('行動力2', LanguageCode.JA),
  )
})

test('Get the flattened shard skill ids in the core', () => {
  const languageCode = LanguageCode.JA
  const core = _getFullCoreForTesting()
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
  const core = _getFullCoreForTesting()
  const scoreMaps = _getScoreMapsForTesting()
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
  const core = _getFullCoreForTesting()
  const scoreMaps = _getScoreMapsForTesting()
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

const _getScoreMapsForTesting = (): ScoreMaps => {
  const languageCode = LanguageCode.JA
  return new ScoreMaps(
    new Map<QuartzId, number>([
      [getQuartzIdByName('ゴリアテ', languageCode), 3],
      [getQuartzIdByName('デイダラボッチ', languageCode), 5],
      [getQuartzIdByName('水霊の詩', languageCode), 3],
      [getQuartzIdByName('蒼氷の詩', languageCode), 7],
      [getQuartzIdByName('カリオペ', languageCode), 10],
      [getQuartzIdByName('コノハナサクヤ', languageCode), 10],
      [getQuartzIdByName('ハヌマーン', languageCode), 5],
      [getQuartzIdByName('行動力1', languageCode), 2],
      [getQuartzIdByName('行動力2', languageCode), 4],
      [getQuartzIdByName('行動力3', languageCode), 8],
      [getQuartzIdByName('駆動1', languageCode), 1],
      [getQuartzIdByName('駆動2', languageCode), 3],
      [getQuartzIdByName('駆動3', languageCode), 7],
      [getQuartzIdByName('黒耀珠', languageCode), 10],
      [getQuartzIdByName('省EP1', languageCode), 1],
      [getQuartzIdByName('省EP2', languageCode), 3],
      [getQuartzIdByName('省EP3', languageCode), 5],
      [getQuartzIdByName('金耀珠', languageCode), 8],
      [getQuartzIdByName('クロートー', languageCode), 4],
      [getQuartzIdByName('精神1', languageCode), 1],
      [getQuartzIdByName('精神2', languageCode), 3],
      [getQuartzIdByName('精神3', languageCode), 5],
      [getQuartzIdByName('銀耀珠', languageCode), 10],
      [getQuartzIdByName('月霊の詩', languageCode), 3],
      [getQuartzIdByName('朧月の詩', languageCode), 7],
    ]),
    new Map<ShardSkillId, number>([
      [getShardSkillIdByName('アクアブースト', languageCode), 3],
      [getShardSkillIdByName('アクアブーストII', languageCode), 7],
      [getShardSkillIdByName('カオスブースト', languageCode), 3],
      [getShardSkillIdByName('カオスブーストII', languageCode), 7],
      [
        getShardSkillIdByName('マインドクラッカー', languageCode),
        3,
      ],
      [
        getShardSkillIdByName('マインドクラッカー改', languageCode),
        5,
      ],
      [
        getShardSkillIdByName('スピリットクラッカー', languageCode),
        3,
      ],
      [
        getShardSkillIdByName('スピリットクラッカー改', languageCode),
        5,
      ],
      [getShardSkillIdByName('アークフェザー', languageCode), 10],
      [getShardSkillIdByName('アークフェザー改', languageCode), 15],
      [getShardSkillIdByName('カタラクトゲイン', languageCode), 10],
      [
        getShardSkillIdByName('カタラクトゲインII', languageCode),
        12,
      ],
      [getShardSkillIdByName('オートクイック', languageCode), 10],
      [getShardSkillIdByName('ヘブンリーラック', languageCode), 10],
      [
        getShardSkillIdByName('ヘブンリーラックII', languageCode),
        10,
      ],

      [
        getShardSkillIdByName('エナジーチャージャー', languageCode),
        5,
      ],
      [
        getShardSkillIdByName('エナジーチャージャーII', languageCode),
        7,
      ],
    ]),
  )
}
