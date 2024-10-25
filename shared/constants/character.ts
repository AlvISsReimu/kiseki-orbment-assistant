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
] as Character[]
