import {
  DRIVE_LINE_SHARD_SKILLS,
  EXTRA_LINE_SHARD_SKILLS,
  SHIELD_LINE_SHARD_SKILLS,
  WEAPON_LINE_SHARD_SKILLS,
} from '../constants/shardSkill.js'
import { Element } from '../enums/element.js'
import type { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import { getQuartzById } from './quartz.js'
import { ScoreMaps } from './score.js'
import { ShardSkill } from './shardSkill.js'
import { ElementLimitedSlot } from './slot.js'

export abstract class QuartzLine {
  lineType: QuartzLineType
  totalSlots: number
  regularSlotQuartzIds: number[]
  elementLimitedSlots: ElementLimitedSlot[]

  constructor(
    lineType: QuartzLineType,
    totalSlots: number,
    regularSlotQuartzIds: number[],
    elementLimitedSlots: ElementLimitedSlot[],
  ) {
    this.lineType = lineType
    this.totalSlots = totalSlots
    this.regularSlotQuartzIds = regularSlotQuartzIds
    this.elementLimitedSlots = elementLimitedSlots
  }

  calcSumElementalValues(): Map<Element, number> {
    const res = new Map<Element, number>()

    for (const quartzId of this.regularSlotQuartzIds) {
      const quartz = getQuartzById(quartzId)
      if (!quartz) continue
      for (const elementValue of quartz.elementalValues) {
        const element = elementValue[0]
        const value = elementValue[1]
        if (res[element] === undefined) {
          res[element] = 0
        }
        res[element] += value
      }
    }

    for (const elementLimitedSlot of this.elementLimitedSlots) {
      if (!elementLimitedSlot.quartzId) continue
      const quartz = getQuartzById(elementLimitedSlot.quartzId)
      if (!quartz) continue
      for (const elementValue of quartz.elementalValues) {
        const element = elementValue[0]
        const value = elementValue[1]
        if (res[element] === undefined) {
          res[element] = 0
        }
        res[element] += value * 2
      }
    }

    return res
  }

  addOrReplaceQuartz(quartzId: number): void {
    const quartz = getQuartzById(quartzId)
    if (!quartz) return

    let isRegular = true
    if (this._hasElementLimitedSlot(quartz.element)) {
      isRegular = Math.random() < 0.5
    }

    if (isRegular) {
      if (this.regularSlotQuartzIds.length >= this._getRegularSlotCount()) {
        const index = Math.floor(
          Math.random() * this.regularSlotQuartzIds.length,
        )
        this.regularSlotQuartzIds[index] = quartzId
      } else {
        this.regularSlotQuartzIds.push(quartzId)
      }
    } else {
      // random choose one element limited slot
      const elementLimitedSlots = this.elementLimitedSlots.filter(
        elementLimitedSlot => elementLimitedSlot.element === quartz.element,
      )
      // elementLimitedSlots won't be empty here
      const index = Math.floor(Math.random() * elementLimitedSlots.length)
      elementLimitedSlots[index].quartzId = quartzId
    }
  }

  removeQuartz(quartzId: number): boolean {
    const index = this.regularSlotQuartzIds.indexOf(quartzId)
    if (index !== -1) {
      this.regularSlotQuartzIds.splice(index, 1)
      return true
    }

    for (const elementLimitedSlot of this.elementLimitedSlots) {
      if (elementLimitedSlot.quartzId === quartzId) {
        elementLimitedSlot.quartzId = null
        return true
      }
    }

    return false
  }

  analyzeCurrentShardSkills(): ShardSkill[] {
    const allShardSkills = this.getAllAvailableShardSkills()
    const sumElementalValues = this.calcSumElementalValues()
    const filteredSkills = allShardSkills.filter(shardSkill => {
      for (const elementValue of shardSkill.elementalValues) {
        const element = elementValue[0]
        const value = elementValue[1]
        if (
          !sumElementalValues[element] ||
          sumElementalValues[element] < value
        ) {
          return false
        }
      }
      return true
    })
    const baseShardSkillIds = filteredSkills
      .filter(shardSkill => shardSkill.baseShardSkillId !== undefined)
      .map(shardSkill => shardSkill.baseShardSkillId)
    return filteredSkills.filter(
      shardSkill => !baseShardSkillIds.includes(shardSkill.id),
    )
  }

  hasQuartz(quartzId: number): boolean {
    return (
      this.regularSlotQuartzIds.includes(quartzId) ||
      this.elementLimitedSlots.some(
        elementLimitedSlot => elementLimitedSlot.quartzId === quartzId,
      )
    )
  }

  getFlattenedQuartzIds(): number[] {
    const res = [...this.regularSlotQuartzIds]
    for (const elementLimitedSlot of this.elementLimitedSlots) {
      if (elementLimitedSlot.quartzId) {
        res.push(elementLimitedSlot.quartzId)
      }
    }
    return res
  }

  calcScore(scoreMaps: ScoreMaps): number {
    const shardSkillScores = this.analyzeCurrentShardSkills()
      .map(shardSkill => shardSkill.id)
      .map(id => scoreMaps.shardSkillScores.get(id))
      .filter(score => score)
      .reduce((acc, score) => acc + score, 0)
    const QuartzScores = this.getFlattenedQuartzIds()
      .map(id => scoreMaps.quartzScores.get(id))
      .filter(score => score)
      .reduce((acc, id) => acc + id, 0)
    return shardSkillScores + QuartzScores
  }

  toQuartzNames(language: Language): string {
    const regularNames = this.regularSlotQuartzIds.map(quartzId => {
      const quartz = getQuartzById(quartzId)
      return quartz ? quartz.name_i18n[language] : 'N/A'
    })
    for (const elementLimitedSlot of this.elementLimitedSlots) {
      let name = 'N/A'
      if (elementLimitedSlot.quartzId) {
        const quartz = getQuartzById(elementLimitedSlot.quartzId)
        name = quartz?.name_i18n[language] ?? 'N/A'
      }
      regularNames.splice(elementLimitedSlot.position, 0, name + '*')
    }
    return regularNames.join(', ')
  }

  toShardSkillNames(language: Language): string {
    const shardSkills = this.analyzeCurrentShardSkills()
    return shardSkills
      .map(shardSkill => shardSkill.name_i18n[language])
      .join(', ')
  }

  toElementValues(): string {
    const sumElementalValues = this.calcSumElementalValues()
    return `${sumElementalValues[Element.Earth] ?? 0}, ${
      sumElementalValues[Element.Water] ?? 0
    }, ${sumElementalValues[Element.Fire] ?? 0}, ${
      sumElementalValues[Element.Wind] ?? 0
    }, ${sumElementalValues[Element.Time] ?? 0}, ${
      sumElementalValues[Element.Space] ?? 0
    }, ${sumElementalValues[Element.Mirage] ?? 0}`
  }

  abstract getAllAvailableShardSkills(): ShardSkill[]
  abstract deepCopy(): QuartzLine

  private _hasElementLimitedSlot(element: Element): boolean {
    return this.elementLimitedSlots.some(
      elementLimitedSlot => elementLimitedSlot.element === element,
    )
  }

  private _getRegularSlotCount(): number {
    return this.totalSlots - this.elementLimitedSlots.length
  }
}

export class WeaponLine extends QuartzLine {
  constructor(
    totalSlots: number,
    regularSlotQuartzIds: number[],
    elementLimitedSlots: ElementLimitedSlot[],
  ) {
    super(
      QuartzLineType.Weapon,
      totalSlots,
      regularSlotQuartzIds,
      elementLimitedSlots,
    )
  }

  getAllAvailableShardSkills(): ShardSkill[] {
    return WEAPON_LINE_SHARD_SKILLS
  }

  deepCopy(): QuartzLine {
    return new WeaponLine(
      this.totalSlots,
      [...this.regularSlotQuartzIds],
      this.elementLimitedSlots.map(elementLimitedSlot =>
        elementLimitedSlot.deepCopy(),
      ),
    )
  }
}

export class ShieldLine extends QuartzLine {
  constructor(
    totalSlots: number,
    regularSlotQuartzIds: number[],
    elementLimitedSlots: ElementLimitedSlot[],
  ) {
    super(
      QuartzLineType.Shield,
      totalSlots,
      regularSlotQuartzIds,
      elementLimitedSlots,
    )
  }

  getAllAvailableShardSkills(): ShardSkill[] {
    return SHIELD_LINE_SHARD_SKILLS
  }

  deepCopy(): QuartzLine {
    return new ShieldLine(
      this.totalSlots,
      [...this.regularSlotQuartzIds],
      this.elementLimitedSlots.map(elementLimitedSlot =>
        elementLimitedSlot.deepCopy(),
      ),
    )
  }
}

export class DriveLine extends QuartzLine {
  constructor(
    totalSlots: number,
    regularSlotQuartzIds: number[],
    elementLimitedSlots: ElementLimitedSlot[],
  ) {
    super(
      QuartzLineType.Drive,
      totalSlots,
      regularSlotQuartzIds,
      elementLimitedSlots,
    )
  }

  getAllAvailableShardSkills(): ShardSkill[] {
    return DRIVE_LINE_SHARD_SKILLS
  }

  deepCopy(): QuartzLine {
    return new DriveLine(
      this.totalSlots,
      [...this.regularSlotQuartzIds],
      this.elementLimitedSlots.map(elementLimitedSlot =>
        elementLimitedSlot.deepCopy(),
      ),
    )
  }
}

export class ExtraLine extends QuartzLine {
  constructor(
    totalSlots: number,
    regularSlotQuartzIds: number[],
    elementLimitedSlots: ElementLimitedSlot[],
  ) {
    super(
      QuartzLineType.Extra,
      totalSlots,
      regularSlotQuartzIds,
      elementLimitedSlots,
    )
  }

  getAllAvailableShardSkills(): ShardSkill[] {
    return EXTRA_LINE_SHARD_SKILLS
  }

  deepCopy(): QuartzLine {
    return new ExtraLine(
      this.totalSlots,
      [...this.regularSlotQuartzIds],
      this.elementLimitedSlots.map(elementLimitedSlot =>
        elementLimitedSlot.deepCopy(),
      ),
    )
  }
}
