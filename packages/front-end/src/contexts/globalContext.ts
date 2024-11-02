import { LanguageCode } from '@shared/enums/languageCode'
import { useEffect, useState } from 'react'
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
  const { i18n } = useTranslation()
  const [language, setLanguage] = useSingletonLocalStorage<LanguageCode>(
    'language',
    getLanguageCode(i18n.language),
  )
  const [resultParams, setResultParams] = useState<{
    characterId: number
    quartz: { [key: number]: number }
    shardSkills: { [key: number]: number }
  }>({ characterId: 0, quartz: {}, shardSkills: {} })
  const [showLoading, setShowLoading] = useState(false)

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
    showLoading,
    setShowLoading,
    resultParams,
    setResultParams,
  }
})
