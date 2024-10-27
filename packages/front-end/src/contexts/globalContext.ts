import { LanguageCode } from '@shared/enums/languageCode'
import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import { useSingletonLocalStorage } from '../utils/utils'

export const globalContext = genericHookContextBuilder(() => {
  const [language, setLanguage] = useSingletonLocalStorage<LanguageCode>(
    'language',
    LanguageCode.ZH_CN,
  )

  return {
    language,
    setLanguage,
  }
})
