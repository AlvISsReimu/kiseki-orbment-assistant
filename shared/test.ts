import 'source-map-support/register.js'
import { Language } from './enums/language'
import { getCharacterIdByNameJP } from './model/character.js'
import {
  getQuartzById,
  getQuartzIdByNameJP,
  type QuartzId,
} from './model/quartz'
import { ScoreMaps } from './model/score.js'
import {
  getShardSkillById,
  getShardSkillIdByNameJP,
  type ShardSkillId,
} from './model/shardSkill'
import { calcOptimalOrbmentSetup } from './orbmentAssistant'

const scoreMaps = new ScoreMaps(
  new Map<QuartzId, number>([
    [getQuartzIdByNameJP('ゴリアテ'), 3],
    [getQuartzIdByNameJP('デイダラボッチ'), 5],
    [getQuartzIdByNameJP('水霊の詩'), 3],
    [getQuartzIdByNameJP('蒼氷の詩'), 7],
    [getQuartzIdByNameJP('カリオペ'), 10],
    [getQuartzIdByNameJP('コノハナサクヤ'), 10],
    [getQuartzIdByNameJP('ハヌマーン'), 5],
    [getQuartzIdByNameJP('行動力1'), 2],
    [getQuartzIdByNameJP('行動力2'), 4],
    [getQuartzIdByNameJP('行動力3'), 8],
    [getQuartzIdByNameJP('駆動1'), 1],
    [getQuartzIdByNameJP('駆動2'), 3],
    [getQuartzIdByNameJP('駆動3'), 7],
    [getQuartzIdByNameJP('黒耀珠'), 10],
    [getQuartzIdByNameJP('省EP1'), 1],
    [getQuartzIdByNameJP('省EP2'), 3],
    [getQuartzIdByNameJP('省EP3'), 5],
    [getQuartzIdByNameJP('金耀珠'), 8],
    [getQuartzIdByNameJP('クロートー'), 4],
    [getQuartzIdByNameJP('精神1'), 1],
    [getQuartzIdByNameJP('精神2'), 3],
    [getQuartzIdByNameJP('精神3'), 5],
    [getQuartzIdByNameJP('銀耀珠'), 10],
    [getQuartzIdByNameJP('月霊の詩'), 3],
    [getQuartzIdByNameJP('朧月の詩'), 7],
  ]),
  new Map<ShardSkillId, number>([
    [getShardSkillIdByNameJP('Aライズガード'), 10],
    [getShardSkillIdByNameJP('アクアブースト'), 3],
    [getShardSkillIdByNameJP('アクアブーストII'), 7],
    [getShardSkillIdByNameJP('カオスブースト'), 3],
    [getShardSkillIdByNameJP('カオスブーストII'), 7],
    [getShardSkillIdByNameJP('マインドクラッカー'), 3],
    [getShardSkillIdByNameJP('マインドクラッカー改'), 5],
    [getShardSkillIdByNameJP('スピリットクラッカー'), 3],
    [getShardSkillIdByNameJP('スピリットクラッカー改'), 5],
    [getShardSkillIdByNameJP('アークフェザー'), 10],
    [getShardSkillIdByNameJP('アークフェザー改'), 15],
    [getShardSkillIdByNameJP('カタラクトゲイン'), 7],
    [getShardSkillIdByNameJP('カタラクトゲインII'), 8],
    [getShardSkillIdByNameJP('オートクイック'), 10],
    [getShardSkillIdByNameJP('ヘブンリーラック'), 7],
    [getShardSkillIdByNameJP('ヘブンリーラックII'), 10],
  ]),
)

const characterId = getCharacterIdByNameJP('フェリ')

const bannedQuartzIds = [
  getQuartzIdByNameJP('銀耀珠'),
  getQuartzIdByNameJP('精神3'),
  getQuartzIdByNameJP('行動力3'),
  getQuartzIdByNameJP('カリオペ'),
  getQuartzIdByNameJP('锻神'),
] as QuartzId[]

export const test = () => {
  const language = Language.ZH_CN

  const result = calcOptimalOrbmentSetup({
    characterId,
    scoreMaps,
    bannedQuartzIds,
    initTemperature: 1000,
    coolingRate: 0.985,
    endTemperature: 1e-2,
    balance: 500,
    maxIteration: 1200,
    maxNoChangeIteration: 20,
    resultSizeLimit: 10,
  })
  const { bestResults, bestScore } = result

  console.log(`score: ${bestScore}, result size: ${bestResults.length}`)

  for (let i = 0; i < bestResults.length; i++) {
    const core = bestResults[i]
    console.log(`result ${i + 1}:\n${core.toString(language)}`)
    console.log('Missed quartz:')
    console.log(
      core
        .getMissedQuartzIds(scoreMaps.quartzScores)
        .map(id => getQuartzById(id).name_i18n[language]),
    )
    console.log('Missed shard skills:')
    console.log(
      core
        .getMissedShardSkillIds(scoreMaps.shardSkillScores)
        .map(id => getShardSkillById(id).name_i18n[language]),
    )
  }
}
