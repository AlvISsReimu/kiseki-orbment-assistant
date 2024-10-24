import { ALL_QUARTZ, ALL_QUARTZ_MAP } from '../constants/quartz.js'
import { Element } from '../enums/element.js'
import { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'

export type QuartzId = number
export class Quartz {
  id: QuartzId
  name_i18n: { [key: string]: string }
  element: Element
  elementalValues: Map<Element, number>
  lineTypeLimit: QuartzLineType[] | null
}

export const getQuartzById = (id: QuartzId): Quartz | null => {
  return ALL_QUARTZ_MAP.get(id) ?? null
}

// TODO: a temp function for testing
export const getQuartzIdByNameJP = (name_jp: string): QuartzId | null => {
  for (let i = 0; i < ALL_QUARTZ.length; i++) {
    if (ALL_QUARTZ[i].name_i18n[Language.JA] === name_jp) {
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
  let index: number
  let max = ALL_QUARTZ.length
  do {
    index = Math.floor(Math.random() * ALL_QUARTZ.length)
    max--
  } while (blacklistIds && blacklistIds.includes(index) && max > 0)
  return index
}
