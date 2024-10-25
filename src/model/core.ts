import { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import { getHash } from '../utils/hash'
import { getQuartzById, getRandomQuartzId, type QuartzId } from './quartz.js'
import {
  DriveLine,
  ExtraLine,
  QuartzLine,
  ShieldLine,
  WeaponLine,
} from './quartzLine.js'
import type { ScoreMaps } from './score.js'
import type { ShardSkillId } from './shardSkill'

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

  /**
   * Add a random quartz to a random line in the core.
   * There is a chance that one quartz is removed from the core before adding/replacing a new one.
   * @param blacklistIds
   */
  addOrReplaceRandomQuartz(blacklistIds?: QuartzId[]): void {
    // Get a random quartz id that is not in the blacklist, and try to remove it first
    let randomQuartzId = getRandomQuartzId(blacklistIds)
    // Get all quartz ids before removal, because it might be used as blacklist
    const flattenQuartzIds = this.getFlattenedQuartzIds()
    const removeRes = this.removeQuartz(randomQuartzId)
    if (removeRes) {
      // If the quartz is removed successfully, get a new random quartz id
      // This new id should not occur in the core, including the quartz that is just removed
      randomQuartzId = getRandomQuartzId([
        ...(blacklistIds || []),
        ...flattenQuartzIds,
      ])
    }

    const quartz = getQuartzById(randomQuartzId)
    const randomLine = this._getRandomLine(quartz.lineTypeLimit)
    randomLine.addOrReplaceQuartz(randomQuartzId)
  }

  /**
   * Try to remove a quartz from the core.
   * Only remove the first occurrence of the quartz.
   * @param quartzId
   * @returns If the quartz is removed successfully.
   */
  removeQuartz(quartzId: QuartzId): boolean {
    for (const line of this._allLines()) {
      if (line.removeQuartz(quartzId)) {
        return true
      }
    }
    return false
  }

  /**
   * Sum up the score of all lines in the core.
   * @param scoreMaps
   * @returns
   */
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

  /**
   * Return all quartz ids in the core, including regular and element limited slots.
   * Note that the order of quartz ids is not guaranteed.
   * @returns
   */
  getFlattenedQuartzIds(): QuartzId[] {
    return this._allLines()
      .map(line => line.getFlattenedQuartzIds())
      .reduce((acc, ids) => acc.concat(ids), [])
  }

  /**
   * Return all shard skill ids in the core from all lines.
   * Note that the order of shard skill ids is not guaranteed.
   * @returns
   */
  getFlattenedShardSkillIds(): ShardSkillId[] {
    return this._allLines()
      .map(line => line.analyzeCurrentShardSkills())
      .map(shardSkills => shardSkills.map(shardSkill => shardSkill.id))
      .reduce((acc, ids) => acc.concat(ids), [])
  }

  /**
   * Get the hash of the core. Used to decide if the core is equivalent to another core.
   * @returns
   */
  getHash(): string {
    let str = ''
    str += this.getFlattenedQuartzIds().sort().join(',')
    str += '|'
    str += this.getFlattenedShardSkillIds().sort().join(',')
    return getHash(str)
  }

  /**
   * Return quartz ids that show up in the score map but not in the core
   * @param quartzScores
   * @returns
   */
  getMissedQuartzIds(quartzScores: Map<QuartzId, number>): QuartzId[] {
    const allQuartzIds = this.getFlattenedQuartzIds()
    return Array.from(quartzScores.keys()).filter(
      quartzId => !allQuartzIds.includes(quartzId),
    )
  }

  /**
   * Return shard skill ids that show up in the score map but not in the core
   * @param shardSkillScores
   * @returns
   */
  getMissedShardSkillIds(
    shardSkillScores: Map<ShardSkillId, number>,
  ): ShardSkillId[] {
    const allShardSkillIds = this.getFlattenedShardSkillIds()
    return Array.from(shardSkillScores.keys()).filter(
      shardSkillId => !allShardSkillIds.includes(shardSkillId),
    )
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

  /**
   * Return a random line in the core.
   * @param whiteList
   * @returns If whiteList is not specified, return a random line from all line types.
   * Otherwise, return a random line from the white list.
   */
  private _getRandomLine(whiteList?: QuartzLineType[]): QuartzLine {
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
