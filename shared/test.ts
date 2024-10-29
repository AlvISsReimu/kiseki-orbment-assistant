import 'source-map-support/register.js'
import { LanguageCode } from './enums/languageCode'
import { getCharacterIdByName } from './model/character.js'
import { getQuartzById, getQuartzIdByName, type QuartzId } from './model/quartz'
import { ScoreMaps } from './model/scoreMaps.js'
import {
  getShardSkillById,
  getShardSkillIdByName,
  type ShardSkillId,
} from './model/shardSkill'
import { runSimulatedAnnealing } from './orbmentAssistant'

const scoreMaps = new ScoreMaps(
  new Map<QuartzId, number>([
    [getQuartzIdByName('ゴリアテ', LanguageCode.JA), 3],
    [getQuartzIdByName('デイダラボッチ', LanguageCode.JA), 5],
    [getQuartzIdByName('水霊の詩', LanguageCode.JA), 3],
    [getQuartzIdByName('蒼氷の詩', LanguageCode.JA), 7],
    [getQuartzIdByName('カリオペ', LanguageCode.JA), 10],
    [getQuartzIdByName('コノハナサクヤ', LanguageCode.JA), 10],
    [getQuartzIdByName('ハヌマーン', LanguageCode.JA), 5],
    [getQuartzIdByName('行動力1', LanguageCode.JA), 2],
    [getQuartzIdByName('行動力2', LanguageCode.JA), 4],
    [getQuartzIdByName('行動力3', LanguageCode.JA), 8],
    [getQuartzIdByName('駆動1', LanguageCode.JA), 1],
    [getQuartzIdByName('駆動2', LanguageCode.JA), 3],
    [getQuartzIdByName('駆動3', LanguageCode.JA), 7],
    [getQuartzIdByName('黒耀珠', LanguageCode.JA), 10],
    [getQuartzIdByName('省EP1', LanguageCode.JA), 1],
    [getQuartzIdByName('省EP2', LanguageCode.JA), 3],
    [getQuartzIdByName('省EP3', LanguageCode.JA), 5],
    [getQuartzIdByName('金耀珠', LanguageCode.JA), 8],
    [getQuartzIdByName('クロートー', LanguageCode.JA), 4],
    [getQuartzIdByName('精神1', LanguageCode.JA), 1],
    [getQuartzIdByName('精神2', LanguageCode.JA), 3],
    [getQuartzIdByName('精神3', LanguageCode.JA), 5],
    [getQuartzIdByName('銀耀珠', LanguageCode.JA), 10],
    [getQuartzIdByName('月霊の詩', LanguageCode.JA), 3],
    [getQuartzIdByName('朧月の詩', LanguageCode.JA), 7],
  ]),
  new Map<ShardSkillId, number>([
    // [getShardSkillIdByName('Aライズガード', LanguageCode.JA), 10],
    [getShardSkillIdByName('アクアブースト', LanguageCode.JA), 3],
    [getShardSkillIdByName('アクアブーストII', LanguageCode.JA), 7],
    [getShardSkillIdByName('カオスブースト', LanguageCode.JA), 3],
    [getShardSkillIdByName('カオスブーストII', LanguageCode.JA), 7],
    [getShardSkillIdByName('マインドクラッカー', LanguageCode.JA), 3],
    [getShardSkillIdByName('マインドクラッカー改', LanguageCode.JA), 5],
    [getShardSkillIdByName('スピリットクラッカー', LanguageCode.JA), 3],
    [getShardSkillIdByName('スピリットクラッカー改', LanguageCode.JA), 5],
    [getShardSkillIdByName('アークフェザー', LanguageCode.JA), 10],
    [getShardSkillIdByName('アークフェザー改', LanguageCode.JA), 15],
    [getShardSkillIdByName('カタラクトゲイン', LanguageCode.JA), 10],
    [getShardSkillIdByName('カタラクトゲインII', LanguageCode.JA), 12],
    [getShardSkillIdByName('オートクイック', LanguageCode.JA), 10],
    [getShardSkillIdByName('ヘブンリーラック', LanguageCode.JA), 10],
    [getShardSkillIdByName('ヘブンリーラックII', LanguageCode.JA), 10],

    [getShardSkillIdByName('エナジーチャージャー', LanguageCode.JA), 5],
    [getShardSkillIdByName('エナジーチャージャーII', LanguageCode.JA), 7],
  ]),
)

// const scoreMaps = new ScoreMaps(
//   new Map<QuartzId, number>([
//     [getQuartzIdByName('ゴリアテ'), 4],
//     [getQuartzIdByName('デイダラボッチ'), 10],
//     [getQuartzIdByName('フロレント'), 3],
//     [getQuartzIdByName('攻撃1'), 2],
//     [getQuartzIdByName('攻撃2'), 5],
//     [getQuartzIdByName('攻撃3'), 8],
//     [getQuartzIdByName('破壊1'), 1],
//     [getQuartzIdByName('破壊2'), 3],
//     [getQuartzIdByName('破壊3'), 5],
//     [getQuartzIdByName('紅耀珠'), 10],
//     [getQuartzIdByName('スマウグ'), 4],
//     [getQuartzIdByName('ベオウルフ'), 5],
//     [getQuartzIdByName('プロメテウス'), 12],
//     [getQuartzIdByName('必殺1'), 2],
//     [getQuartzIdByName('必殺2'), 4],
//     [getQuartzIdByName('必殺3'), 6],
//     [getQuartzIdByName('翠耀珠'), 8],
//     [getQuartzIdByName('クサナギ'), 12],
//     [getQuartzIdByName('行動力1'), 2],
//     [getQuartzIdByName('行動力2'), 4],
//     [getQuartzIdByName('行動力3'), 8],
//     [getQuartzIdByName('黒耀珠'), 10],
//     [getQuartzIdByName('バンダースナッチ'), 10],
//     [getQuartzIdByName('グングニル'), 10],
//     [getQuartzIdByName('ヘカテー'), 3],
//     [getQuartzIdByName('命中1'), 1],
//     [getQuartzIdByName('命中2'), 3],
//     [getQuartzIdByName('命中3'), 5],
//     [getQuartzIdByName('金耀珠'), 5],
//     [getQuartzIdByName('妨害1'), 1],
//     [getQuartzIdByName('妨害2'), 2],
//     [getQuartzIdByName('妨害3'), 3],
//     [getQuartzIdByName('銀耀珠'), 4],
//     [getQuartzIdByName('隠者'), 8],
//     [getQuartzIdByName('デュランダル'), 10],
//     [getQuartzIdByName('腐蝕の刃'), 1],
//     [getQuartzIdByName('腐蝕の刃II'), 3],
//     [getQuartzIdByName('凍結の刃'), 1],
//     [getQuartzIdByName('凍結の刃II'), 3],
//     [getQuartzIdByName('炎傷の刃'), 1],
//     [getQuartzIdByName('炎傷の刃II'), 3],
//     [getQuartzIdByName('封技の刃'), 1],
//     [getQuartzIdByName('封技の刃II'), 3],
//     [getQuartzIdByName('冥暗の刃'), 1],
//     [getQuartzIdByName('冥暗の刃II'), 3],
//     [getQuartzIdByName('封魔の刃'), 1],
//     [getQuartzIdByName('封魔の刃II'), 3],
//     [getQuartzIdByName('恐怖の刃'), 1],
//     [getQuartzIdByName('恐怖の刃II'), 3],
//   ]),
//   new Map<ShardSkillId, number>([
//     [getShardSkillIdByNameJP('ソードブレイカー'), 3],
//     [getShardSkillIdByNameJP('ソードブレイカー改'), 7],
//     [getShardSkillIdByNameJP('シールドブレイカー'), 3],
//     [getShardSkillIdByNameJP('シールドブレイカー改'), 7],
//     [getShardSkillIdByNameJP('バーストゲイン'), 5],
//     [getShardSkillIdByNameJP('バーストゲインII'), 7],
//     [getShardSkillIdByNameJP('Aライズガード'), 12],
//     [getShardSkillIdByNameJP('リベンジアロー'), 1],
//     [getShardSkillIdByNameJP('リベンジアロー改'), 3],
//     [getShardSkillIdByNameJP('オートフォルテ'), 10],
//     [getShardSkillIdByNameJP('オートクイック'), 10],
//     [getShardSkillIdByNameJP('スクラムアップ'), 3],
//     [getShardSkillIdByNameJP('スクラムアップII'), 5],
//     [getShardSkillIdByNameJP('ヘブンリーラック'), 3],
//     [getShardSkillIdByNameJP('ヘブンリーラックII'), 4],
//   ]),
// )

const characterId = getCharacterIdByName('カトル', LanguageCode.JA)

const bannedQuartzIds = [
  // getQuartzIdByName('紅耀珠'),
  // getQuartzIdByName('攻撃3'),
] as QuartzId[]

export const test = () => {
  const result = runSimulatedAnnealing({
    characterId,
    scoreMaps,
    bannedQuartzIds,
    // initTemperature: 1000,
    // coolingRate: 0.985,
    // endTemperature: 1e-2,
    // balance: 500,
    maxIteration: 1200,
    maxNoChangeIteration: 20,
    resultSizeLimit: 10,
  })
  const { bestResults, bestScore } = result

  console.log(`score: ${bestScore}, result size: ${bestResults.length}`)

  const languageCode = LanguageCode.JA
  for (let i = 0; i < bestResults.length; i++) {
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
}
