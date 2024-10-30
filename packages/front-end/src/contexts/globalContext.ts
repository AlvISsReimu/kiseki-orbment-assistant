import { LanguageCode } from '@shared/enums/languageCode'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import { useSingletonLocalStorage } from '../utils/utils'

const LANGUAGES_MAP = new Map<string, LanguageCode>([
  ['zh', LanguageCode.ZH_CN],
] as [string, LanguageCode][])

const getLanguageCode = (language: string): LanguageCode => {
  const code = LANGUAGES_MAP.get(language)
  return code || (language as LanguageCode)
}

export const globalContext = genericHookContextBuilder(() => {
  const [language, setLanguage] = useSingletonLocalStorage<LanguageCode>(
    'language',
    LanguageCode.ZH_CN,
  )
  const { i18n } = useTranslation()

  useEffect(() => {
    const handleLanguageChanged = () => {
      setLanguage(getLanguageCode(i18n.language))
    }
    i18n.on('languageChanged', handleLanguageChanged)
    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [])

  return {
    language,
  }
})
