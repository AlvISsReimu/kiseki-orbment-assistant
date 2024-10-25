import { useState } from 'react'
import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import { Language } from '@shared/enums/language'

export const globalContext = genericHookContextBuilder(() => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : 'dark'
  })
  const [language, setLanguage] = useState<Language>(Language.ZH_CN)

  return {
    themeMode,
    setThemeMode,
    language,
    setLanguage,
  }
})
