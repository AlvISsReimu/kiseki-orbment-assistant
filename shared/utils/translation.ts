import { LanguageCode } from '@shared/enums/languageCode'

export const translation = {
  global: {
    language: {
      [LanguageCode.ZH_CN]: '语言',
      [LanguageCode.JA]: '言語',
      [LanguageCode.EN]: 'Language',
    },
    enabled: {
      [LanguageCode.ZH_CN]: '启用',
      [LanguageCode.JA]: '有効',
      [LanguageCode.EN]: 'Enabled',
    },
    disabled: {
      [LanguageCode.ZH_CN]: '禁用',
      [LanguageCode.JA]: '無効',
      [LanguageCode.EN]: 'Disabled',
    },
    weighted: {
      [LanguageCode.ZH_CN]: '加权',
      [LanguageCode.JA]: '重み付け',
      [LanguageCode.EN]: 'Weighted',
    },
  },
}
