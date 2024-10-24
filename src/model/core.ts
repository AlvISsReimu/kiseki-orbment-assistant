import { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import { getHash } from '../utils/hash'
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

  addOrReplaceRandomQuartz(blacklistIds?: number[]): void {
    let randomQuartzId = getRandomQuartzId(blacklistIds)
    const flattenQuartzIds = this.getFlattenedQuartzIds()
    const removeRes = this.removeQuartz(randomQuartzId)
    if (removeRes) {
      randomQuartzId = getRandomQuartzId([
        ...(blacklistIds || []),
        ...flattenQuartzIds,
      ])
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

  getHash(): string {
    let str = ''
    str += this.getFlattenedQuartzIds().sort().join(',')
    str += '|'
    str += this.getFlattenedShardSkillIds().sort().join(',')
    return getHash(str)
  }

  toString(language: Language): string {
    return (
      `[${this.weaponLine.toQuartzNames(
        language,
      )}] (${this.weaponLine.toElementValues()}) (${this.weaponLine.toShardSkillNames(language)})` +
      '\n' +
      `[${this.shieldLine.toQuartzNames(
        language,
      )}] (${this.shieldLine.toElementValues()}) (${this.shieldLine.toShardSkillNames(language)})` +
      '\n' +
      `[${this.driveLine.toQuartzNames(
        language,
      )}] (${this.driveLine.toElementValues()}) (${this.driveLine.toShardSkillNames(language)})` +
      '\n' +
      `[${this.extraLine.toQuartzNames(
        language,
      )}] (${this.extraLine.toElementValues()}) (${this.extraLine.toShardSkillNames(language)})`
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
