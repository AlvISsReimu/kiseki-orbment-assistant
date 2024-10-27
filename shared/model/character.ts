import { ALL_CHARACTERS } from '../constants/character.js'
import { LanguageCode } from '../enums/languageCode.js'
import type { Core } from './core.js'

export type CharacterId = number
export class Character {
  id: CharacterId
  name_i18n: { [key: string]: string }
  /*
   * The holo core of the character. When a character is created, there is no quartz in the core.
   */
  core: Core
}

/**
 * Get a character by id. Returns null if not found.
 * @param id
 * @returns
 */
export const getCharacterById = (id: CharacterId): Character | null => {
  return ALL_CHARACTERS[id] ?? null
}

export const getCharacterIdByName = (
  name: string,
  languageCode: LanguageCode,
): CharacterId | null => {
  for (let i = 0; i < ALL_CHARACTERS.length; i++) {
    if (ALL_CHARACTERS[i].name_i18n[languageCode] === name) {
      return i
    }
  }
  return null
}
