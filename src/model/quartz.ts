import { ALL_QUARTZ, ALL_QUARTZ_MAP } from '../constants/quartz.js'
import { Element } from '../enums/element.js'
import { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'

export class Quartz {
  id: number
  name_i18n: { [key: string]: string }
  element: Element
  elementalValues: Map<Element, number>
  lineTypeLimit: QuartzLineType[] | null
}

export const getQuartzById = (id: number): Quartz | null => {
  return ALL_QUARTZ_MAP.get(id) ?? null
}

export const getQuartzIdByNameJP = (name_jp: string): number | null => {
  for (let i = 0; i < ALL_QUARTZ.length; i++) {
    if (ALL_QUARTZ[i].name_i18n[Language.JA] === name_jp) {
      return i
    }
  }
  return null
}

export const getRandomQuartzId = (blacklistIds?: number[]): number => {
  let index: number
  let max = ALL_QUARTZ.length
  do {
    index = Math.floor(Math.random() * ALL_QUARTZ.length)
    max--
  } while (blacklistIds && blacklistIds.includes(index) && max > 0)
  return index
}
