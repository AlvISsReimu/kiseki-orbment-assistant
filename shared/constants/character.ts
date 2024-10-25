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
] as Character[]
