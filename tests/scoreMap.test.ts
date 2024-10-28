import { LanguageCode } from '@shared/enums/languageCode'
import { type QuartzId, getQuartzIdByName } from '@shared/model/quartz'
import { ScoreMaps } from '@shared/model/scoreMaps'
import {
  type ShardSkillId,
  getShardSkillIdByName,
} from '@shared/model/shardSkill'
import { expect, test } from 'vitest'

test('Normalize the scores of quartz and shard skills to 100', () => {
  const languageCode = LanguageCode.ZH_CN
  const firstquartzId = getQuartzIdByName('卡利俄佩', languageCode)
  const secondQuartzId = getQuartzIdByName('库罗索', languageCode)
  const firstShardSkillId = getShardSkillIdByName('大地增幅', languageCode)
  const secondShardSkillId = getShardSkillIdByName('水花增幅II', languageCode)
  const scoreMaps = new ScoreMaps(
    new Map<QuartzId, number>([
      [firstquartzId, 1],
      [secondQuartzId, 4],
    ]),
    new Map<ShardSkillId, number>([
      [firstShardSkillId, 6],
      [secondShardSkillId, 9],
    ]),
  )
  const newScoreMaps = scoreMaps.normalize()
  expect(newScoreMaps.quartzScores.get(firstquartzId)).toBe(5)
  expect(newScoreMaps.quartzScores.get(secondQuartzId)).toBe(20)
  expect(newScoreMaps.shardSkillScores.get(firstShardSkillId)).toBe(30)
  expect(newScoreMaps.shardSkillScores.get(secondShardSkillId)).toBe(45)

  // The original object is not modified
  expect(scoreMaps.quartzScores.get(firstquartzId)).toBe(1)
  expect(scoreMaps.quartzScores.get(secondQuartzId)).toBe(4)
  expect(scoreMaps.shardSkillScores.get(firstShardSkillId)).toBe(6)
  expect(scoreMaps.shardSkillScores.get(secondShardSkillId)).toBe(9)
})
