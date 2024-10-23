import 'source-map-support/register.js'
import { Element } from './enums/element.js'
import { Core } from './model/core.js'
import { getQuartzIdByNameJP } from './model/quartz.js'
import {
  DriveLine,
  ExtraLine,
  ShieldLine,
  WeaponLine,
} from './model/quartzLine.js'
import { ScoreMaps } from './model/score.js'
import { getShardSkillIdByNameJP } from './model/shardSkill.js'
import { createElementLimitedSlot } from './model/slot.js'
import { SimulatedAnnealing } from './simulatedAnnealing.js'

const scoreMaps = {
  quartzScores: new Map<number, number>([
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
  shardSkillScores: new Map<number, number>([
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
} as ScoreMaps

const emptyCore = new Core(
  new WeaponLine(4, [], [createElementLimitedSlot(Element.Earth, 2)]),
  new ShieldLine(4, [], [createElementLimitedSlot(Element.Earth, 1)]),
  new DriveLine(4, [], [createElementLimitedSlot(Element.Space, 2)]),
  new ExtraLine(3, [], []),
)

const sa = new SimulatedAnnealing<Core>({
  init: () => emptyCore,
  neighbor: (current: Core) => {
    const cloned = current.deepCopy()
    cloned.addOrReplaceRandomQuartz()
    return cloned
  },
  fitness: (current: Core) => current.calcScore(scoreMaps),
})
const { results, score } = sa.run()

console.log(`score: ${score}, result size: ${results.length}`)
for (let i = 0; i < results.length; i++) {
  console.log(`result ${i}:\n${results[i].toString()}`)
}
