import { Language } from "@shared/enums/language";

export const translation = {
  global: {
    language: {
      [Language.ZH_CN]: '语言',
      [Language.JA]: '言語',
      [Language.EN]: 'Language',
    },
    chinese: {
      [Language.ZH_CN]: '简体中文',
      // chinese in japanese
      [Language.JA]: '簡体字',
      // chinese in english
      [Language.EN]: 'Simplified Chinese',
    },
    japanese: {
      [Language.ZH_CN]: '日语',
      [Language.JA]: '日本語',
      [Language.EN]: 'Japanese',
    },
    english: {
      [Language.ZH_CN]: '英语',
      [Language.JA]: '英語',
      [Language.EN]: 'English',
    },
    enabled: {
      [Language.ZH_CN]: '启用',
      [Language.JA]: '有効',
      [Language.EN]: 'Enabled',
    },
    disabled:{
      [Language.ZH_CN]: '禁用',
      [Language.JA]: '無効',
      [Language.EN]: 'Disabled',
    },
    weighted: {
      [Language.ZH_CN]: '加权',
      [Language.JA]: '重み付け',
      [Language.EN]: 'Weighted',
    }
  }
}
