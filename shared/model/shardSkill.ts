import {
  ALL_SHARD_SKILLS,
  ALL_SHARD_SKILLS_MAP,
} from '../constants/shardSkill.js'
import { ElementType } from '../enums/elementType.js'
import { LanguageCode } from '../enums/languageCode.js'
import { QuartzLineType } from '../enums/quartzLineType.js'

export type ShardSkillId = number
export class ShardSkill {
  id: ShardSkillId
  name_i18n: { [key: string]: string }
  lineType: QuartzLineType
  elementalValues: Map<ElementType, number>
  /*
   * A shard skill can be a an 'advanced' shard skill of another one.
   */
  baseShardSkillId?: ShardSkillId
}

/**
 * Get a shard skill by id. Returns null if not found.
 * @param id
 * @returns
 */
export const getShardSkillById = (id: ShardSkillId): ShardSkill | null => {
  return ALL_SHARD_SKILLS_MAP.get(id) ?? null
}

// TODO: a temp function for testing
export const getShardSkillIdByNameJP = (
  name_jp: string,
): ShardSkillId | null => {
  for (let i = 0; i < ALL_SHARD_SKILLS.length; i++) {
    if (ALL_SHARD_SKILLS[i].name_i18n[LanguageCode.JA] === name_jp) {
      return i
    }
  }
  return null
}
