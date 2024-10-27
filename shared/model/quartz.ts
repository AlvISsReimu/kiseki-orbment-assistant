import { ALL_QUARTZ, ALL_QUARTZ_MAP } from '../constants/quartz.js'
import { ElementType } from '../enums/elementType.js'
import { LanguageCode } from '../enums/languageCode.js'
import { QuartzLineType } from '../enums/quartzLineType.js'

export type QuartzId = number
export class Quartz {
  id: QuartzId
  name_i18n: { [key: string]: string }
  elementType: ElementType
  elementalValues: Map<ElementType, number>
  /*
   * The line types that the quartz can be added to.
   * If not specified, the quartz can be added to any line type.
   */
  lineTypeLimit?: QuartzLineType[]
}

/**
 * Get a quartz by id. Returns null if not found.
 * @param id
 * @returns
 */
export const getQuartzById = (id: QuartzId): Quartz | null => {
  return ALL_QUARTZ_MAP.get(id) ?? null
}

export const getQuartzIdByName = (
  name: string,
  languageCode: LanguageCode,
): QuartzId | null => {
  for (let i = 0; i < ALL_QUARTZ.length; i++) {
    if (ALL_QUARTZ[i].name_i18n[languageCode] === name) {
      return i
    }
  }
  return null
}

/**
 * Return a random quartz id, excluding the ids in the blacklist.
 * If blacklist has all quartz ids, return a random quartz id.
 * @param blacklistIds
 * @returns A random quartz id. Must be a valid index of ALL_QUARTZ.
 */
export const getRandomQuartzId = (blacklistIds?: QuartzId[]): QuartzId => {
  const allQuartzIds = ALL_QUARTZ.map(quartz => quartz.id) as QuartzId[]
  const availableQuartzIds = allQuartzIds.filter(
    id => !blacklistIds?.includes(id),
  )
  if (availableQuartzIds.length === 0) {
    return Math.floor(Math.random() * ALL_QUARTZ.length) as QuartzId
  }
  return availableQuartzIds[
    Math.floor(Math.random() * availableQuartzIds.length)
  ] as QuartzId
}
