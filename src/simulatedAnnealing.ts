interface SimulatedAnnealingOptions<T> {
  initTemperature?: number
  coolingRate?: number
  maxIteration?: number
  maxNoChangeIteration?: number
  endTemperature?: number
  balance?: number
  acceptanceProbability?: (delta: number, temperature: number) => number
  init: () => T
  neighbor: (current: T) => T
  fitness: (current: T) => number
}

interface Equatable {
  isEquivalent(other: this): boolean
}

export class SimulatedAnnealing<T extends Equatable> {
  private _initTemperature: number
  private _coolingRate: number
  private _maxIteration: number | null
  private _maxNoChangeIteration: number | null
  private _endTemperature: number
  private _balance: number
  private _acceptanceProbability: (delta: number, temperature: number) => number
  private _init: () => T
  private _neighbor: (current: T) => T
  private _fitness: (current: T) => number

  constructor(options: SimulatedAnnealingOptions<T>) {
    this._initTemperature = options.initTemperature ?? 10000
    this._coolingRate = options.coolingRate ?? 0.99
    this._maxIteration = options.maxIteration ?? 3000
    this._maxNoChangeIteration = options.maxNoChangeIteration ?? 50
    this._endTemperature = options.endTemperature ?? 1e-2
    this._balance = options.balance ?? 1000
    this._acceptanceProbability =
      options.acceptanceProbability ??
      ((delta: number, temperature: number) => {
        return delta > 0 ? 1 : Math.exp(delta / temperature)
      })
    this._init = options.init
    this._neighbor = options.neighbor
    this._fitness = options.fitness
  }

  run(): { results: T[]; score: number } {
    let iteration = 0
    let temperature = this._initTemperature
    let score = 0
    let noChangeIteration = 0
    let result: T = this._init()
    let bestScore = 0
    let bestResults: T[] = []

    while (
      temperature > this._endTemperature &&
      (!this._maxIteration || iteration < this._maxIteration) &&
      (!this._maxNoChangeIteration ||
        noChangeIteration < this._maxNoChangeIteration)
    ) {
      const scoreBeforeBalancing = score
      for (let i = 0; i < this._balance; i++) {
        const neighbor: T = this._neighbor(result)
        const newScore = this._fitness(neighbor)
        const delta = newScore - score
        const prob = this._acceptanceProbability(delta, temperature)
        if (prob > Math.random()) {
          result = neighbor
          score = newScore

          if (score === bestScore) {
            // only push if not already in the list
            if (!bestResults.some(r => r.isEquivalent(result))) {
              bestResults.push(result)
            }
          } else if (score > bestScore) {
            bestScore = score
            bestResults = [result]
          }
        }
      }

      console.log(`iteration ${iteration}, score ${score}, T ${temperature}`)

      temperature *= this._coolingRate
      iteration++
      noChangeIteration =
        score === scoreBeforeBalancing ? noChangeIteration + 1 : 0
    }
    return { results: bestResults, score: bestScore }
  }
}
