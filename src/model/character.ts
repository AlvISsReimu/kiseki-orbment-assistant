import { ALL_CHARACTERS } from '../constants/character.js'
import { Language } from '../enums/language.js'
import type { Core } from './core.js'

export class Character {
  id: number
  name_i18n: { [key: string]: string }
  core: Core
}

export const getCharacterById = (id: number): Character | null => {
  return ALL_CHARACTERS[id] ?? null
}

export const getCharacterIdByNameJP = (name_jp: string): number | null => {
  for (let i = 0; i < ALL_CHARACTERS.length; i++) {
    if (ALL_CHARACTERS[i].name_i18n[Language.JA] === name_jp) {
      return i
    }
  }
  return null
}
