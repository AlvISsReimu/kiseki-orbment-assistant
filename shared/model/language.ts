import { LanguageCode } from '@shared/enums/languageCode'

export class Language {
  langeuageCode: LanguageCode
  name: string
}

export const getNameByLanguageCode = (languageCode: LanguageCode): string => {
  return ALL_LANGUAGES.find(language => language.langeuageCode === languageCode)
    ?.name
}

export const ALL_LANGUAGES: Language[] = [
  { langeuageCode: LanguageCode.ZH_CN, name: '简体中文' },
  { langeuageCode: LanguageCode.JA, name: '日本語' },
  { langeuageCode: LanguageCode.EN, name: 'English' },
] as Language[]
