import { ElementType } from '../enums/elementType.js'
import { LanguageCode } from '../enums/languageCode.js'
import type { Character } from '../model/character.js'
import { Core } from '../model/core.js'
import {
  DriveLine,
  ExtraLine,
  ShieldLine,
  WeaponLine,
} from '../model/quartzLine.js'
import { createElementLimitedSlot } from '../model/slot.js'

export const ALL_CHARACTERS: Character[] = [
  {
    id: 0,
    name_i18n: {
      [LanguageCode.ZH_CN]: '范恩',
      [LanguageCode.JA]: 'ヴァン',
      [LanguageCode.EN]: 'Van',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Time, 1)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Time, 2)]),
      new DriveLine(3, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Earth, 2)]),
    ),
  },
  {
    id: 1,
    name_i18n: {
      [LanguageCode.ZH_CN]: '亚妮艾丝',
      [LanguageCode.JA]: 'アニエス',
      [LanguageCode.EN]: 'Agnès',
    },
    core: new Core(
      new WeaponLine(3, [], []),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Water, 1)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
    ),
  },
  {
    id: 2,
    name_i18n: {
      [LanguageCode.ZH_CN]: '菲莉',
      [LanguageCode.JA]: 'フェリ',
      [LanguageCode.EN]: 'Feri',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Fire, 1)]),
      new ShieldLine(3, [], []),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 1)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Fire, 2)]),
    ),
  },
  {
    id: 3,
    name_i18n: {
      [LanguageCode.ZH_CN]: '亚伦',
      [LanguageCode.JA]: 'アーロン',
      [LanguageCode.EN]: 'Aaron',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Wind, 1)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Fire, 2)]),
      new DriveLine(3, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Wind, 2)]),
    ),
  },
  {
    id: 4,
    name_i18n: {
      [LanguageCode.ZH_CN]: '莉婕特',
      [LanguageCode.JA]: 'リゼット',
      [LanguageCode.EN]: 'Risette',
    },
    core: new Core(
      new WeaponLine(4, [], []),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Water, 1)]),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Wind, 2)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Water, 1)]),
    ),
  },
  {
    id: 5,
    name_i18n: {
      [LanguageCode.ZH_CN]: '卡特尔',
      [LanguageCode.JA]: 'カトル',
      [LanguageCode.EN]: 'Quatre',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Earth, 2)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Earth, 1)]),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
      new ExtraLine(3, [], []),
    ),
  },
  {
    id: 6,
    name_i18n: {
      [LanguageCode.ZH_CN]: '茱迪丝',
      [LanguageCode.JA]: 'ジュディス',
      [LanguageCode.EN]: 'Judith',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Time, 2)]),
      new ShieldLine(3, [], []),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 2)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 1)]),
    ),
  },
  {
    id: 7,
    name_i18n: {
      [LanguageCode.ZH_CN]: '贝尔加德',
      [LanguageCode.JA]: 'ベルガルド',
      [LanguageCode.EN]: 'Bergard',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Space, 1)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Earth, 2)]),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
      new ExtraLine(3, [], []),
    ),
  },
  {
    id: 8,
    name_i18n: {
      [LanguageCode.ZH_CN]: '艾蕾因',
      [LanguageCode.JA]: 'エレイン',
      [LanguageCode.EN]: 'Elaine',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 1)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Wind, 2)]),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 2)]),
      new ExtraLine(3, [], []),
    ),
  },
  {
    id: 9,
    name_i18n: {
      [LanguageCode.ZH_CN]: '静名',
      [LanguageCode.JA]: 'シズナ',
      [LanguageCode.EN]: 'Shizuna',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Water, 2)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Time, 2)]),
      new DriveLine(4, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Water, 1)]),
    ),
  },
  {
    id: 10,
    name_i18n: {
      [LanguageCode.ZH_CN]: '蕾恩',
      [LanguageCode.JA]: 'レン',
      [LanguageCode.EN]: 'Renne',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
      new ShieldLine(4, [], []),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 1)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 2)]),
    ),
  },
  {
    id: 11,
    name_i18n: {
      [LanguageCode.ZH_CN]: '约尔妲',
      [LanguageCode.JA]: 'ヨルダ',
      [LanguageCode.EN]: 'Jorda',
    },
    core: new Core(
      new WeaponLine(3, [], []),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Time, 2)]),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Time, 1)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Fire, 2)]),
    ),
  },
  {
    id: 12,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黎恩',
      [LanguageCode.JA]: 'リィン',
      [LanguageCode.EN]: 'Rean',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Fire, 1)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Fire, 2)]),
      new DriveLine(3, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Time, 2)]),
    ),
  },
  {
    id: 13,
    name_i18n: {
      [LanguageCode.ZH_CN]: '亚尔缇娜',
      [LanguageCode.JA]: 'アルティナ',
      [LanguageCode.EN]: 'Altina',
    },
    core: new Core(
      new WeaponLine(3, [], []),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Water, 2)]),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 1)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 2)]),
    ),
  },
  {
    id: 14,
    name_i18n: {
      [LanguageCode.ZH_CN]: '菲',
      [LanguageCode.JA]: 'フィー',
      [LanguageCode.EN]: 'Fie',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Wind, 1)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Wind, 2)]),
      new DriveLine(3, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Time, 2)]),
    ),
  },
  {
    id: 15,
    name_i18n: {
      [LanguageCode.ZH_CN]: '克洛',
      [LanguageCode.JA]: 'クロウ',
      [LanguageCode.EN]: 'Crow',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Wind, 1)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Wind, 2)]),
      new DriveLine(3, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Time, 2)]),
    ),
  },
  {
    id: 16,
    name_i18n: {
      [LanguageCode.ZH_CN]: '塞莉丝',
      [LanguageCode.JA]: 'セリス',
      [LanguageCode.EN]: 'Celis',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Fire, 1)]),
      new ShieldLine(3, [], [createElementLimitedSlot(ElementType.Fire, 2)]),
      new DriveLine(4, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Earth, 2)]),
    ),
  },
  {
    id: 17,
    name_i18n: {
      [LanguageCode.ZH_CN]: '里翁',
      [LanguageCode.JA]: 'リオン',
      [LanguageCode.EN]: 'Leon',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Water, 2)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Water, 1)]),
      new ExtraLine(3, [], []),
    ),
  },
  {
    id: 18,
    name_i18n: {
      [LanguageCode.ZH_CN]: '金',
      [LanguageCode.JA]: 'ジン',
      [LanguageCode.EN]: 'Zin',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Earth, 2)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Earth, 1)]),
      new DriveLine(3, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Water, 2)]),
    ),
  },
  {
    id: 19,
    name_i18n: {
      [LanguageCode.ZH_CN]: '凯文',
      [LanguageCode.JA]: 'ケビン',
      [LanguageCode.EN]: 'Kevin',
    },
    core: new Core(
      new WeaponLine(3, [], [createElementLimitedSlot(ElementType.Space, 2)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Time, 1)]),
      new DriveLine(4, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
    ),
  },
  {
    id: 20,
    name_i18n: {
      [LanguageCode.ZH_CN]: '卢法斯',
      [LanguageCode.JA]: 'ルーファス',
      [LanguageCode.EN]: 'Rufus',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Space, 2)]),
      new ShieldLine(3, [], []),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Wind, 2)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Wind, 1)]),
    ),
  },
  {
    id: 21,
    name_i18n: {
      [LanguageCode.ZH_CN]: '斯温',
      [LanguageCode.JA]: 'スウィン',
      [LanguageCode.EN]: 'Swin',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Wind, 2)]),
      new ShieldLine(4, [], [createElementLimitedSlot(ElementType.Time, 1)]),
      new DriveLine(3, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Time, 2)]),
    ),
  },
  {
    id: 22,
    name_i18n: {
      [LanguageCode.ZH_CN]: '娜狄雅',
      [LanguageCode.JA]: 'ナーディア',
      [LanguageCode.EN]: 'Nadia',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Fire, 2)]),
      new ShieldLine(4, [], []),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Fire, 1)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Water, 2)]),
    ),
  },
  {
    id: 23,
    name_i18n: {
      [LanguageCode.ZH_CN]: '莉夏',
      [LanguageCode.JA]: 'リーシャ',
      [LanguageCode.EN]: 'Rixia',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 1)]),
      new ShieldLine(3, [], []),
      new DriveLine(4, [], [createElementLimitedSlot(ElementType.Fire, 2)]),
      new ExtraLine(4, [], [createElementLimitedSlot(ElementType.Mirage, 2)]),
    ),
  },
] as Character[]
