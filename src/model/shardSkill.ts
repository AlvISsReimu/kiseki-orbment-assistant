import {
  ALL_SHARD_SKILLS,
  ALL_SHARD_SKILLS_MAP,
} from '../constants/shardSkill.js'
import { Element } from '../enums/element.js'
import { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'

export type ShardSkillId = number
export class ShardSkill {
  id: ShardSkillId
  name_i18n: { [key: string]: string }
  lineType: QuartzLineType
  elementalValues: Map<Element, number>
  baseShardSkillId?: ShardSkillId
}

export const getShardSkillById = (id: ShardSkillId): ShardSkill | null => {
  return ALL_SHARD_SKILLS_MAP.get(id) ?? null
}

export const getShardSkillIdByNameJP = (
  name_jp: string,
): ShardSkillId | null => {
  for (let i = 0; i < ALL_SHARD_SKILLS.length; i++) {
    if (ALL_SHARD_SKILLS[i].name_i18n[Language.JA] === name_jp) {
      return i
    }
  }
  return null
}
