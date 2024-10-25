import {
  checkAndSetDefault,
  type RequiredSimulatedAnnealingOptions,
  type SimulatedAnnealingOptions,
} from './options'

export class SimulatedAnnealing<T extends Hashable> {
  options: SimulatedAnnealingOptions<T>

  constructor(options: SimulatedAnnealingOptions<T>) {
    this.options = options
  }

  run(): SimulatedAnnealingResult<T> {
    return _runSimulatedAnnealing(checkAndSetDefault(this.options))
  }
}

const _runSimulatedAnnealing = <T extends Hashable>(
  options: RequiredSimulatedAnnealingOptions<T>,
): SimulatedAnnealingResult<T> => {
  // initial temperature, state and score
  let temperature = options.initTemperature
  let currentState: T = options.init()
  let currentScore = options.fitness(currentState)

  // some counters
  let currentIteration = 0
  let noChangeIteration = 0

  // used to store the historical best results and score
  let bestScore = 0
  let bestResults: T[] = []
  const bestResultsHash: Set<string> = new Set()

  while (
    temperature > options.endTemperature &&
    (!options.maxIteration || currentIteration < options.maxIteration) &&
    (!options.maxNoChangeIteration ||
      noChangeIteration < options.maxNoChangeIteration)
  ) {
    const scoreBeforeBalancing = currentScore
    for (let i = 0; i < options.balance; i++) {
      const neighbor: T = options.neighbor(currentState)
      const newScore = options.fitness(neighbor)
      const delta = newScore - currentScore
      const prob = options.acceptanceProbability(delta, temperature)
      if (prob > Math.random()) {
        // accept the new state
        currentState = neighbor
        currentScore = newScore

        if (currentScore === bestScore) {
          // only push if not already in the list
          const resultHash = currentState.getHash()
          if (!bestResultsHash.has(resultHash)) {
            bestResults.push(currentState)
            bestResultsHash.add(resultHash)
            if (bestResults.length > options.resultSizeLimit) {
              // remove the oldest result if the length exceeds the limit
              const deleted = bestResults.shift()
              bestResultsHash.delete(deleted!.getHash())
            }
          }
        } else if (currentScore > bestScore) {
          // current state is better than the best one, update it
          bestScore = currentScore
          bestResults = []
          bestResultsHash.clear()
          if (options.resultSizeLimit > 0) {
            // in most cases the limit is set to be larger than 0
            bestResults.push(currentState)
            bestResultsHash.add(currentState.getHash())
          }
        }
      }
    }

    // console.log(`iteration ${iteration}, score ${score}, T ${temperature}`)

    // update temperature and counters
    temperature *= options.coolingRate
    currentIteration++
    noChangeIteration =
      currentScore === scoreBeforeBalancing ? noChangeIteration + 1 : 0
  }
  return {
    bestResults: bestResults,
    bestScore: bestScore,
  } as SimulatedAnnealingResult<T>
}

export interface Hashable {
  getHash(): string
}

export interface SimulatedAnnealingResult<T extends Hashable> {
  bestResults: T[]
  bestScore: number
}
