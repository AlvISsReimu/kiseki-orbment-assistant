import { DefaultParameterValues } from '@shared/constants/defaultParameterValues'
import type { Hashable } from './simulatedAnnealing'

/**
 * These are the parameters passed into SimulatedAnnealing class.
 */
export interface SimulatedAnnealingOptions<T extends Hashable> {
  // mandatory
  init: () => T
  neighbor: (current: T) => T
  fitness: (current: T) => number

  // optional, but with default values if not provided
  initTemperature?: number
  coolingRate?: number
  endTemperature?: number
  balance?: number
  acceptanceProbability?: (delta: number, temperature: number) => number

  // optional
  maxIteration?: number
  maxNoChangeIteration?: number
  resultSizeLimit?: number
}

/**
 * When running SAA, some parameters are required.
 * This is a more strict version of the SimulatedAnnealingOptions interface.
 */
export type RequiredSimulatedAnnealingOptions<T extends Hashable> =
  SimulatedAnnealingOptions<T> & {
    initTemperature: number
    coolingRate: number
    endTemperature: number
    balance: number
    acceptanceProbability: (delta: number, temperature: number) => number
  }

/**
 * Check if the parameters are valid. If not, set them to default values.
 * @param options
 * @returns
 */
export const checkAndSetDefault = <T extends Hashable>(
  options: SimulatedAnnealingOptions<T>,
): RequiredSimulatedAnnealingOptions<T> => {
  // destructuring with default values
  const {
    initTemperature = DefaultParameterValues.INIT_TEMPERATURE,
    coolingRate = DefaultParameterValues.COOLING_RATE,
    endTemperature = DefaultParameterValues.END_TEMPERATURE,
    balance = DefaultParameterValues.BALANCE,
    acceptanceProbability = (delta: number, temperature: number) => {
      return delta > 0 ? 1 : Math.exp(delta / temperature)
    },
    maxIteration,
    maxNoChangeIteration,
    resultSizeLimit,
  } = options

  // validate the parameters
  const validatedInitTemperature =
    initTemperature > 0
      ? initTemperature
      : DefaultParameterValues.INIT_TEMPERATURE
  const validatedCoolingRate =
    coolingRate > 0 && coolingRate < 1
      ? coolingRate
      : DefaultParameterValues.COOLING_RATE
  const validatedEndTemperature =
    endTemperature > 0 && endTemperature < validatedInitTemperature
      ? endTemperature
      : DefaultParameterValues.END_TEMPERATURE
  const validatedBalance =
    balance > 0 ? balance : DefaultParameterValues.BALANCE
  const validatedMaxIteration =
    maxIteration && maxIteration > 0 ? maxIteration : undefined
  const validatedMaxNoChangeIteration =
    maxNoChangeIteration && maxNoChangeIteration > 0
      ? maxNoChangeIteration
      : undefined
  const validatedResultSizeLimit =
    resultSizeLimit && resultSizeLimit > 0 ? resultSizeLimit : undefined

  return {
    init: options.init,
    neighbor: options.neighbor,
    fitness: options.fitness,
    initTemperature: validatedInitTemperature,
    coolingRate: validatedCoolingRate,
    endTemperature: validatedEndTemperature,
    balance: validatedBalance,
    acceptanceProbability,
    maxIteration: validatedMaxIteration,
    maxNoChangeIteration: validatedMaxNoChangeIteration,
    resultSizeLimit: validatedResultSizeLimit,
  } as RequiredSimulatedAnnealingOptions<T>
}
