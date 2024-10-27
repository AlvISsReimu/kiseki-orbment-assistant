import { ALL_SHARD_SKILLS } from '@shared/constants/shardSkill'
import { LanguageCode } from '@shared/enums/languageCode'
import {
  type ShardSkillId,
  getShardSkillById,
  getShardSkillIdByName,
} from '@shared/model/shardSkill'
import { expect, test } from 'vitest'

test('Get shard skill by id', () => {
  // Test for the first shard skill
  let shardSkillId = 0 as ShardSkillId
  let shardSkill = ALL_SHARD_SKILLS[shardSkillId]
  let shardSkillById = getShardSkillById(shardSkillId)

  expect(shardSkillById).toEqual(shardSkill)

  // Test for the last shard skill
  shardSkillId = (ALL_SHARD_SKILLS.length - 1) as ShardSkillId
  shardSkill = ALL_SHARD_SKILLS[shardSkillId]
  shardSkillById = getShardSkillById(shardSkillId)
  expect(shardSkillById).toEqual(shardSkill)
})

test('Get shard skill by id with invalid id', () => {
  let shardSkillId = -1 as ShardSkillId
  let shardSkillById = getShardSkillById(shardSkillId)
  expect(shardSkillById).toBeNull()
})

test('Get shard skill id by name', () => {
  const shardSkillId = 0 as ShardSkillId
  const shardSkill = ALL_SHARD_SKILLS[shardSkillId]
  const languageCode = LanguageCode.EN
  const foundShardSkillId = getShardSkillIdByName(
    shardSkill.name_i18n[languageCode],
    languageCode,
  )
  expect(foundShardSkillId).toEqual(shardSkillId)
})

test('Get shard skill id by name with invalid name', () => {
  const foundShardSkillId = getShardSkillIdByName(
    'invalid name',
    LanguageCode.EN,
  )
  expect(foundShardSkillId).toBeNull()
})
