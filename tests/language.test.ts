import { LanguageCode } from '@shared/enums/languageCode'
import { getNameByLanguageCode } from '@shared/model/language'
import { expect, test } from 'vitest'

test('Get name by language code', () => {
  const languageCode = LanguageCode.EN
  const name = getNameByLanguageCode(languageCode)
  expect(name).toBe('English')
})
