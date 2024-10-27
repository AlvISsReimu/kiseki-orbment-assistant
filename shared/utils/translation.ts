import { LanguageCode } from '@shared/enums/languageCode'

export const TRANSLATION = {
  GLOBAL: {
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
  CHARACTER: {
    character: {
      [LanguageCode.ZH_CN]: '角色',
      [LanguageCode.JA]: 'キャラクター',
      [LanguageCode.EN]: 'Character',
    },
    weapon: {
      [LanguageCode.ZH_CN]: '武器',
      [LanguageCode.JA]: '武器',
      [LanguageCode.EN]: 'Weapon',
    },
    shield: {
      [LanguageCode.ZH_CN]: '盾',
      [LanguageCode.JA]: 'シールド',
      [LanguageCode.EN]: 'Shield',
    },
    drive: {
      [LanguageCode.ZH_CN]: '驱动',
      [LanguageCode.JA]: 'ドライブ',
      [LanguageCode.EN]: 'Drive',
    },
    extra: {
      [LanguageCode.ZH_CN]: '额外',
      [LanguageCode.JA]: 'エクストラ',
      [LanguageCode.EN]: 'Extra',
    },
  },
  QUARTZ_TABLE: {
    title: {
      [LanguageCode.ZH_CN]: '晶石表',
      [LanguageCode.JA]: 'クォーツテーブル',
      [LanguageCode.EN]: 'Quartz Table',
    },
  },
  SHARD_SKILL_TABLE: {
    weaponLine: {
      [LanguageCode.ZH_CN]: '武器线规则表',
      [LanguageCode.JA]: '武器ライン規則表',
      [LanguageCode.EN]: 'Weapon Line Rule Table',
    },
    shieldLine: {
      [LanguageCode.ZH_CN]: '盾线规则表',
      [LanguageCode.JA]: 'シールドライン規則表',
      [LanguageCode.EN]: 'Shield Line Rule Table',
    },
    driveLine: {
      [LanguageCode.ZH_CN]: '驱动线规则表',
      [LanguageCode.JA]: 'ドライブライン規則表',
      [LanguageCode.EN]: 'Drive Line Rule Table',
    },
    extraLine: {
      [LanguageCode.ZH_CN]: '额外线规则表',
      [LanguageCode.JA]: 'エクストラライン規則表',
      [LanguageCode.EN]: 'Extra Line Rule Table',
    },
  },
} as const
