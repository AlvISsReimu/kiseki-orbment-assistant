export class ScoreMaps {
  quartzScores: Map<number, number>
  shardSkillScores: Map<number, number>

  constructor(
    quartzScores: Map<number, number>,
    shardSkillScores: Map<number, number>,
  ) {
    this.quartzScores = quartzScores
    this.shardSkillScores = shardSkillScores
  }

  standardize(): ScoreMaps {
    const totalScore = this._sumTotalScore()

    const quartzScores = new Map<number, number>()
    this.quartzScores.forEach((score, quartzId) => {
      quartzScores.set(quartzId, (score * 100.0) / totalScore)
    })

    const shardSkillScores = new Map<number, number>()
    this.shardSkillScores.forEach((score, shardSkillId) => {
      shardSkillScores.set(shardSkillId, (score * 100.0) / totalScore)
    })

    return new ScoreMaps(quartzScores, shardSkillScores)
  }

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
