import {
  DRIVE_LINE_SHARD_SKILLS,
  EXTRA_LINE_SHARD_SKILLS,
  SHIELD_LINE_SHARD_SKILLS,
  WEAPON_LINE_SHARD_SKILLS,
} from '../constants/shardSkill.js'
import { ElementType } from '../enums/elementType.js'
import type { LanguageCode } from '../enums/languageCode.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import { getQuartzById, type QuartzId } from './quartz.js'
import { ScoreMaps } from './score.js'
import { ShardSkill } from './shardSkill.js'
import { ElementLimitedSlot } from './slot.js'

export abstract class QuartzLine {
  lineType: QuartzLineType

  /*
   * The total number of slots in the line.
   */
  totalSlots: number

  /*
   * The quartz ids in the regular slots. No order.
   */
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

  /**
   * Calculate the sum of elemental values of all quartz in the line.
   * The elemental value of a quartz is doubled if it is in an element limited slot.
   * @returns
   */
  calcSumElementalValues(): Map<ElementType, number> {
    const res = new Map<ElementType, number>()

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

  /**
   * Add or replace a quartz in the line. The position of the quartz is random.
   * @param quartzId
   * @returns
   */
  addOrReplaceQuartz(quartzId: QuartzId): void {
    const quartz = getQuartzById(quartzId)
    if (!quartz) return

    // If the line has at least one element limited slot for the element of the quartz,
    // the probability of the quartz going to regular slot or element limited slot is 50/50.
    let isRegular = true
    if (this._hasElementLimitedSlot(quartz.element)) {
      isRegular = Math.random() < 0.5
    }

    if (isRegular) {
      // If the line is full, randomly replace one quartz
      if (this.regularSlotQuartzIds.length >= this._getRegularSlotCount()) {
        const index = Math.floor(
          Math.random() * this.regularSlotQuartzIds.length,
        )
        this.regularSlotQuartzIds[index] = quartzId
      } else {
        this.regularSlotQuartzIds.push(quartzId)
      }
    } else {
      // randomly choose one element limited slot
      const elementLimitedSlots = this.elementLimitedSlots.filter(
        elementLimitedSlot => elementLimitedSlot.element === quartz.element,
      )
      // elementLimitedSlots won't be empty here
      const index = Math.floor(Math.random() * elementLimitedSlots.length)
      elementLimitedSlots[index].quartzId = quartzId
    }
  }

  /**
   * Try to remove a quartz from the line, regardless of the slot type.
   * @param quartzId
   * @returns If the quartz is removed successfully.
   */
  removeQuartz(quartzId: QuartzId): boolean {
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

  /**
   * Analyze shard skills that can be activated by the current quartz combination in the line.
   * @returns
   */
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

  /**
   * Check if the line has a quartz.
   * @param quartzId
   * @returns
   */
  hasQuartz(quartzId: QuartzId): boolean {
    return (
      this.regularSlotQuartzIds.includes(quartzId) ||
      this.elementLimitedSlots.some(
        elementLimitedSlot => elementLimitedSlot.quartzId === quartzId,
      )
    )
  }

  /**
   * Return all quartz ids in the line, including regular and element limited slots.
   * Note that the order of quartz ids is not guaranteed.
   * @returns
   */
  getFlattenedQuartzIds(): QuartzId[] {
    const res = [...this.regularSlotQuartzIds]
    for (const elementLimitedSlot of this.elementLimitedSlots) {
      if (elementLimitedSlot.quartzId) {
        res.push(elementLimitedSlot.quartzId)
      }
    }
    return res
  }

  /**
   * Calculate the score of the line, including quartz and shard skill scores.
   * @param scoreMaps
   * @returns
   */
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

  /**
   * Return the names of all quartz in the line in the specified language.
   * @param languageCode
   * @returns The names of all quartz in the line, separated by commas.
   */
  toQuartzNames(languageCode: LanguageCode): string {
    const regularNames = this.regularSlotQuartzIds.map(quartzId => {
      const quartz = getQuartzById(quartzId)
      return quartz ? quartz.name_i18n[languageCode] : 'N/A'
    })
    for (const elementLimitedSlot of this.elementLimitedSlots) {
      let name = 'N/A'
      if (elementLimitedSlot.quartzId) {
        const quartz = getQuartzById(elementLimitedSlot.quartzId)
        name = quartz?.name_i18n[languageCode] ?? 'N/A'
      }
      regularNames.splice(elementLimitedSlot.position, 0, name + '*')
    }
    return regularNames.join(', ')
  }

  /**
   * Return the names of all shard skills that can be activated by the current quartz combination in the line.
   * @param languageCode
   * @returns The names of all shard skills that can be activated by the current quartz combination in the line, separated by commas.
   */
  toShardSkillNames(languageCode: LanguageCode): string {
    const shardSkills = this.analyzeCurrentShardSkills()
    return shardSkills
      .map(shardSkill => shardSkill.name_i18n[languageCode])
      .join(', ')
  }

  /**
   * Return the sum of elemental values of all quartz in the line.
   * @returns Seven numbers separated by commas, representing the sum of elemental values of Earth, Water, Fire, Wind, Time, Space, and Mirage.
   */
  toElementValues(): string {
    const sumElementalValues = this.calcSumElementalValues()
    return `${sumElementalValues[ElementType.Earth] ?? 0}, ${
      sumElementalValues[ElementType.Water] ?? 0
    }, ${sumElementalValues[ElementType.Fire] ?? 0}, ${
      sumElementalValues[ElementType.Wind] ?? 0
    }, ${sumElementalValues[ElementType.Time] ?? 0}, ${
      sumElementalValues[ElementType.Space] ?? 0
    }, ${sumElementalValues[ElementType.Mirage] ?? 0}`
  }

  /**
   * Return the shard skill ids that can be activated by the current quartz combination in the line.
   * Different line types have different available shard skill sets.
   */
  abstract getAllAvailableShardSkills(): ShardSkill[]

  abstract deepCopy(): QuartzLine

  /**
   * Check if the line has at least one element limited slot for the given element.
   * @param element
   * @returns
   */
  private _hasElementLimitedSlot(element: ElementType): boolean {
    return this.elementLimitedSlots.some(
      elementLimitedSlot => elementLimitedSlot.element === element,
    )
  }

  /**
   * Get the number of regular slots in the line.
   * @returns
   */
  private _getRegularSlotCount(): number {
    return this.totalSlots - this.elementLimitedSlots.length
  }
}

export class WeaponLine extends QuartzLine {
  constructor(
    totalSlots: number,
    regularSlotQuartzIds: QuartzId[],
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
    regularSlotQuartzIds: QuartzId[],
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
    regularSlotQuartzIds: QuartzId[],
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
    regularSlotQuartzIds: QuartzId[],
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
