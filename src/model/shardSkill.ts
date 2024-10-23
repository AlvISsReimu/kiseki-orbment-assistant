import {
  ALL_SHARD_SKILLS,
  ALL_SHARD_SKILLS_MAP,
} from '../constants/shardSkill.js'
import { Element } from '../enums/element.js'
import { QuartzLineType } from '../enums/quartzLineType.js'

export class ShardSkill {
  id: number
  name_jp: string
  lineType: QuartzLineType
  elementalValues: Map<Element, number>
  baseShardSkillId?: number
}

export const getShardSkillById = (id: number): ShardSkill | null => {
  return ALL_SHARD_SKILLS_MAP.get(id) ?? null
}

export const getShardSkillIdByNameJP = (name_jp: string): number | null => {
  for (let i = 0; i < ALL_SHARD_SKILLS.length; i++) {
    if (ALL_SHARD_SKILLS[i].name_jp === name_jp) {
      return i
    }
  }
  return null
}
