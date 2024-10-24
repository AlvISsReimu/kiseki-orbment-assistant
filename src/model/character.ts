import { ALL_CHARACTERS } from '../constants/character.js'
import { Language } from '../enums/language.js'
import type { Core } from './core.js'

export type CharacterId = number
export class Character {
  id: CharacterId
  name_i18n: { [key: string]: string }
  core: Core
}

export const getCharacterById = (id: CharacterId): Character | null => {
  return ALL_CHARACTERS[id] ?? null
}

// TODO: a temp function for testing
export const getCharacterIdByNameJP = (name_jp: string): CharacterId | null => {
  for (let i = 0; i < ALL_CHARACTERS.length; i++) {
    if (ALL_CHARACTERS[i].name_i18n[Language.JA] === name_jp) {
      return i
    }
  }
  return null
}
