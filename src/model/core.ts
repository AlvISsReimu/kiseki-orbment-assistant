import { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import { getQuartzById, getRandomQuartzId } from './quartz.js'
import {
  DriveLine,
  ExtraLine,
  QuartzLine,
  ShieldLine,
  WeaponLine,
} from './quartzLine.js'
import type { ScoreMaps } from './score.js'

export class Core {
  weaponLine: WeaponLine
  shieldLine: ShieldLine
  driveLine: DriveLine
  extraLine: ExtraLine

  constructor(
    weaponLine: WeaponLine,
    shieldLine: ShieldLine,
    driveLine: DriveLine,
    extraLine: ExtraLine,
  ) {
    this.weaponLine = weaponLine
    this.shieldLine = shieldLine
    this.driveLine = driveLine
    this.extraLine = extraLine
  }

  addOrReplaceRandomQuartz(): void {
    let randomQuartzId = getRandomQuartzId(null)
    const flattenQuartzIds = this.getFlattenedQuartzIds()
    const removeRes = this.removeQuartz(randomQuartzId)
    if (removeRes) {
      randomQuartzId = getRandomQuartzId(flattenQuartzIds)
    }

    const quartz = getQuartzById(randomQuartzId)
    const randomLine = this._getRandomLine(quartz.lineTypeLimit || null)
    randomLine.addOrReplaceQuartz(randomQuartzId)
  }

  removeQuartz(quartzId: number): boolean {
    for (const line of this._allLines()) {
      if (line.removeQuartz(quartzId)) {
        return true
      }
    }
    return false
  }

  calcScore(scoreMaps: ScoreMaps): number {
    let score = 0
    this._allLines().forEach(line => {
      score += line.calcScore(scoreMaps)
    })
    return score
  }

  deepCopy(): Core {
    return new Core(
      this.weaponLine.deepCopy(),
      this.shieldLine.deepCopy(),
      this.driveLine.deepCopy(),
      this.extraLine.deepCopy(),
    )
  }

  getFlattenedQuartzIds(): number[] {
    return this._allLines()
      .map(line => line.getFlattenedQuartzIds())
      .reduce((acc, ids) => acc.concat(ids), [])
  }

  getFlattenedShardSkillIds(): number[] {
    return this._allLines()
      .map(line => line.getCurrentShardSkills())
      .map(shardSkills => shardSkills.map(shardSkill => shardSkill.id))
      .reduce((acc, ids) => acc.concat(ids), [])
  }

  isEquivalent(other: Core): boolean {
    if (this === other) return true
    if (other == null) return false

    const thisQuartzIds = this.getFlattenedQuartzIds().sort()
    const otherQuartzIds = other.getFlattenedQuartzIds().sort()
    if (thisQuartzIds.length !== otherQuartzIds.length) return false
    for (let i = 0; i < thisQuartzIds.length; i++) {
      if (thisQuartzIds[i] !== otherQuartzIds[i]) return false
    }

    const thisShardSkillIds = this.getFlattenedShardSkillIds().sort()
    const otherShardSkillIds = other.getFlattenedShardSkillIds().sort()
    if (thisShardSkillIds.length !== otherShardSkillIds.length) return false
    for (let i = 0; i < thisShardSkillIds.length; i++) {
      if (thisShardSkillIds[i] !== otherShardSkillIds[i]) return false
    }

    return true
  }

  toString(): string {
    return (
      `[${this.weaponLine.toQuartzNames(
        Language.ZH_CN,
      )}] (${this.weaponLine.toElementValues()}) (${this.weaponLine.toShardSkillNames()})` +
      '\n' +
      `[${this.shieldLine.toQuartzNames(
        Language.ZH_CN,
      )}] (${this.shieldLine.toElementValues()}) (${this.shieldLine.toShardSkillNames()})` +
      '\n' +
      `[${this.driveLine.toQuartzNames(
        Language.ZH_CN,
      )}] (${this.driveLine.toElementValues()}) (${this.driveLine.toShardSkillNames()})` +
      '\n' +
      `[${this.extraLine.toQuartzNames(
        Language.ZH_CN,
      )}] (${this.extraLine.toElementValues()}) (${this.extraLine.toShardSkillNames()})`
    )
  }

  private _allLines(): QuartzLine[] {
    return [this.weaponLine, this.shieldLine, this.driveLine, this.extraLine]
  }

  private _getRandomLine(whiteList: QuartzLineType[] | null): QuartzLine {
    let allLines: QuartzLine[]
    if (!whiteList) {
      allLines = this._allLines()
    } else {
      allLines = this._allLines().filter(line =>
        whiteList.includes(line.lineType),
      )
    }
    const randomIndex = Math.floor(Math.random() * allLines.length)
    return allLines[randomIndex]
  }
}
