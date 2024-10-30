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
  run(): Promise<SimulatedAnnealingResult<T>> {
    return new Promise(resolve => {
      _runSimulatedAnnealing(checkAndSetDefault(this.options), result => {
        resolve(result)
      })
    })
  }
  // run(): SimulatedAnnealingResult<T> {
  //   return _runSimulatedAnnealing(checkAndSetDefault(this.options))
  // }
}

const _runSimulatedAnnealing = <T extends Hashable>(
  options: RequiredSimulatedAnnealingOptions<T>,
  callback?: (result: SimulatedAnnealingResult<T>) => void,
): void => {
  let temperature = options.initTemperature
  let currentState: T = options.init()
  let currentScore = options.fitness(currentState)

  let currentIteration = 0
  let noChangeIteration = 0

  let bestScore = 0
  let bestResults: T[] = []
  const bestResultsHash: Set<string> = new Set()

  function runIteration() {
    // While conditions
    if (
      temperature <= options.endTemperature ||
      (options.maxIteration && currentIteration >= options.maxIteration) ||
      (options.maxNoChangeIteration &&
        noChangeIteration >= options.maxNoChangeIteration)
    ) {
      // Finish the algorithm and call the callback with the result
      if (callback) {
        callback({
          bestResults,
          bestScore,
        } as SimulatedAnnealingResult<T>)
      }
      return // Stop execution
    }

    // Run balance iterations within the current temperature
    const scoreBeforeBalancing = currentScore
    for (let i = 0; i < options.balance; i++) {
      const neighbor: T = options.neighbor(currentState)
      const newScore = options.fitness(neighbor)
      const delta = newScore - currentScore
      const prob = options.acceptanceProbability(delta, temperature)

      if (prob > Math.random()) {
        currentState = neighbor
        currentScore = newScore

        if (currentScore === bestScore) {
          const resultHash = currentState.getHash()
          if (!bestResultsHash.has(resultHash)) {
            bestResults.push(currentState)
            bestResultsHash.add(resultHash)
            if (bestResults.length > options.resultSizeLimit) {
              const deleted = bestResults.shift()
              bestResultsHash.delete(deleted!.getHash())
            }
          }
        } else if (currentScore > bestScore) {
          bestScore = currentScore
          bestResults = [currentState]
          bestResultsHash.clear()
          bestResultsHash.add(currentState.getHash())
        }
      }
    }

    // Update temperature and counters
    temperature *= options.coolingRate
    currentIteration++
    noChangeIteration =
      currentScore === scoreBeforeBalancing ? noChangeIteration + 1 : 0

    // Continue on the next animation frame
    requestAnimationFrame(runIteration)
  }

  // Start the iterative process
  requestAnimationFrame(runIteration)
}

// const _runSimulatedAnnealing = <T extends Hashable>(
//   options: RequiredSimulatedAnnealingOptions<T>,
// ): SimulatedAnnealingResult<T> => {
//   // initial temperature, state and score
//   let temperature = options.initTemperature
//   let currentState: T = options.init()
//   let currentScore = options.fitness(currentState)

//   // some counters
//   let currentIteration = 0
//   let noChangeIteration = 0

//   // used to store the historical best results and score
//   let bestScore = 0
//   let bestResults: T[] = []
//   const bestResultsHash: Set<string> = new Set()

//   while (
//     temperature > options.endTemperature &&
//     (!options.maxIteration || currentIteration < options.maxIteration) &&
//     (!options.maxNoChangeIteration ||
//       noChangeIteration < options.maxNoChangeIteration)
//   ) {
//     const scoreBeforeBalancing = currentScore
//     for (let i = 0; i < options.balance; i++) {
//       const neighbor: T = options.neighbor(currentState)
//       const newScore = options.fitness(neighbor)
//       const delta = newScore - currentScore
//       const prob = options.acceptanceProbability(delta, temperature)
//       if (prob > Math.random()) {
//         // accept the new state
//         currentState = neighbor
//         currentScore = newScore

//         if (currentScore === bestScore) {
//           // only push if not already in the list
//           const resultHash = currentState.getHash()
//           if (!bestResultsHash.has(resultHash)) {
//             bestResults.push(currentState)
//             bestResultsHash.add(resultHash)
//             if (bestResults.length > options.resultSizeLimit) {
//               // remove the oldest result if the length exceeds the limit
//               const deleted = bestResults.shift()
//               bestResultsHash.delete(deleted!.getHash())
//             }
//           }
//         } else if (currentScore > bestScore) {
//           // current state is better than the best one, update it
//           bestScore = currentScore
//           bestResults = []
//           bestResultsHash.clear()
//           if (options.resultSizeLimit > 0) {
//             // in most cases the limit is set to be larger than 0
//             bestResults.push(currentState)
//             bestResultsHash.add(currentState.getHash())
//           }
//         }
//       }
//     }

//     // console.log(`iteration ${iteration}, score ${score}, T ${temperature}`)

//     // update temperature and counters
//     temperature *= options.coolingRate
//     currentIteration++
//     noChangeIteration =
//       currentScore === scoreBeforeBalancing ? noChangeIteration + 1 : 0
//   }
//   return {
//     bestResults: bestResults,
//     bestScore: bestScore,
//   } as SimulatedAnnealingResult<T>
// }

export interface Hashable {
  getHash(): string
}

export interface SimulatedAnnealingResult<T extends Hashable> {
  bestResults: T[]
  bestScore: number
}
