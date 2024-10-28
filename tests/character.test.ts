import { ALL_CHARACTERS } from '@shared/constants/character'
import { LanguageCode } from '@shared/enums/languageCode'
import {
  type CharacterId,
  getCharacterById,
  getCharacterIdByName,
} from '@shared/model/character'
import { expect, test } from 'vitest'

test('Get character by id', () => {
  // Test for the first character
  let characterId = 0 as CharacterId
  let character = ALL_CHARACTERS[characterId]
  let characterById = getCharacterById(characterId)
  expect(characterById).toEqual(character)

  // Test for the last character
  characterId = (ALL_CHARACTERS.length - 1) as CharacterId
  character = ALL_CHARACTERS[characterId]
  characterById = getCharacterById(characterId)
  expect(characterById).toEqual(character)
})

test('Get character by id with invalid id', () => {
  const characterId = -1 as CharacterId
  const characterById = getCharacterById(characterId)
  expect(characterById).toBeNull()
})

test('Get character id by name', () => {
  const characterId = 0 as CharacterId
  const character = ALL_CHARACTERS[characterId]
  const languageCode = LanguageCode.EN
  const foundCharacterId = getCharacterIdByName(
    character.name_i18n[languageCode],
    languageCode,
  )
  expect(foundCharacterId).toEqual(characterId)
})

test('Get character id by name with invalid name', () => {
  const foundCharacterId = getCharacterIdByName('invalid name', LanguageCode.EN)
  expect(foundCharacterId).toBeNull()
})
