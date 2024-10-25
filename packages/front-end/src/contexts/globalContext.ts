import { LanguageCode } from '@shared/enums/languageCode'
import { useState } from 'react'
import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'

export const globalContext = genericHookContextBuilder(() => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : 'dark'
  })
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.ZH_CN)

  return {
    themeMode,
    setThemeMode,
    language,
    setLanguage,
  }
})
