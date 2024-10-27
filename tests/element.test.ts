import { ElementType } from '@shared/enums/elementType'
import { LanguageCode } from '@shared/enums/languageCode'
import { getNameByElementType } from '@shared/model/element'
import { expect, test } from 'vitest'

test('Get name by element type', () => {
  const elementType = ElementType.Earth
  const languageCode = LanguageCode.EN
  const name = getNameByElementType(elementType, languageCode)
  expect(name).toBe('Earth')
})
