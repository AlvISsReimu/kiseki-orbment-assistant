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

  getCurrentShardSkills(): ShardSkill[] {
    const allShardSkills = this.getAllShardSkills()
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
    const shardSkillScores = this.getCurrentShardSkills()
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
    const elementLimitedNames = this.elementLimitedSlots.map(
      elementLimitedSlot => {
        if (!elementLimitedSlot.quartzId) return 'N/A*'
        const quartz = getQuartzById(elementLimitedSlot.quartzId)
        return (quartz ? quartz.name_i18n[language] : 'N/A') + '*'
      },
    )
    return `${regularNames.join(', ')}${
      elementLimitedNames.length > 0 ? ', ' : ''
    }${elementLimitedNames.join(', ')}`
  }

  toShardSkillNames(): string {
    const shardSkills = this.getCurrentShardSkills()
    return shardSkills.map(shardSkill => shardSkill.name_jp).join(', ')
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

  equals(other: QuartzLine): boolean {
    if (this === other) return true
    if (other == null) return false
    if (this.lineType !== other.lineType) return false
    if (this.totalSlots !== other.totalSlots) return false
    if (this.regularSlotQuartzIds.length !== other.regularSlotQuartzIds.length)
      return false
    // regularSlotQuartzIds is seen as a set, so the order doesn't matter.
    const sortedThis = [...this.regularSlotQuartzIds].sort()
    const sortedOther = [...other.regularSlotQuartzIds].sort()
    for (let i = 0; i < sortedThis.length; i++) {
      if (sortedThis[i] !== sortedOther[i]) return false
    }
    if (this.elementLimitedSlots.length !== other.elementLimitedSlots.length)
      return false
    // elementLimitedSlots is seen as a set, so the order doesn't matter.
    const sortedThisElementLimitedSlots = this.elementLimitedSlots.sort(
      (a, b) => a.element.localeCompare(b.element),
    )
    const sortedOtherElementLimitedSlots = other.elementLimitedSlots.sort(
      (a, b) => a.element.localeCompare(b.element),
    )
    for (let i = 0; i < sortedThisElementLimitedSlots.length; i++) {
      if (
        sortedThisElementLimitedSlots[i].quartzId !==
        sortedOtherElementLimitedSlots[i].quartzId
      )
        return false
    }
    return true
  }

  abstract getAllShardSkills(): ShardSkill[]
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

  getAllShardSkills(): ShardSkill[] {
    const shardSkills = WEAPON_LINE_SHARD_SKILLS
    const startIndex = 0
    for (let i = 0; i < shardSkills.length; i++) {
      shardSkills[i].id = startIndex + i
    }
    return shardSkills
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

  getAllShardSkills(): ShardSkill[] {
    const shardSkills = SHIELD_LINE_SHARD_SKILLS
    const startIndex = 28
    for (let i = 0; i < shardSkills.length; i++) {
      shardSkills[i].id = startIndex + i
    }
    return shardSkills
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

  getAllShardSkills(): ShardSkill[] {
    const shardSkills = DRIVE_LINE_SHARD_SKILLS
    const startIndex = 56
    for (let i = 0; i < shardSkills.length; i++) {
      shardSkills[i].id = startIndex + i
    }
    return shardSkills
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

  getAllShardSkills(): ShardSkill[] {
    const shardSkills = EXTRA_LINE_SHARD_SKILLS
    const startIndex = 84
    for (let i = 0; i < shardSkills.length; i++) {
      shardSkills[i].id = startIndex + i
    }
    return shardSkills
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
