import type { QuartzId } from './quartz'
import type { ShardSkillId } from './shardSkill'

export class ScoreMaps {
  /*
   * The score of quartz which is shown in the core setup.
   */
  quartzScores: Map<QuartzId, number>

  /*
   * The score of shard skill which is satisfied in each line.
   */
  shardSkillScores: Map<ShardSkillId, number>

  constructor(
    quartzScores: Map<QuartzId, number>,
    shardSkillScores: Map<ShardSkillId, number>,
  ) {
    this.quartzScores = quartzScores
    this.shardSkillScores = shardSkillScores
  }

  /**
   * Normalize the scores of quartz and shard skills to 100.
   * For example, if the total score of quartz and shard skills is 200,
   * the score of each quartz and shard skill will be divided by 2.
   * @returns A new ScoreMaps object with normalized scores. The original object is not modified.
   */
  normalize(): ScoreMaps {
    const totalScore = this._sumTotalScore()

    const quartzScores = new Map<QuartzId, number>()
    this.quartzScores.forEach((score, quartzId) => {
      quartzScores.set(quartzId, (score * 100.0) / totalScore)
    })

    const shardSkillScores = new Map<ShardSkillId, number>()
    this.shardSkillScores.forEach((score, shardSkillId) => {
      shardSkillScores.set(shardSkillId, (score * 100.0) / totalScore)
    })

    return new ScoreMaps(quartzScores, shardSkillScores)
  }

  /**
   * Calculate the total score of quartz and shard skills.
   * @returns
   */
  private _sumTotalScore(): number {
    let totalScore = 0
    this.quartzScores.forEach(score => {
      totalScore += score
    })
    this.shardSkillScores.forEach(score => {
      totalScore += score
    })
    return totalScore
  }
}
