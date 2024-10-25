import { Element } from '../enums/element.js'
import { Language } from '../enums/language.js'
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
      [Language.ZH_CN]: '范恩',
      [Language.JA]: 'ヴァン',
      [Language.EN]: 'Van',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(Element.Time, 1)]),
      new ShieldLine(4, [], [createElementLimitedSlot(Element.Time, 2)]),
      new DriveLine(3, [], []),
      new ExtraLine(4, [], [createElementLimitedSlot(Element.Earth, 2)]),
    ),
  },
  {
    id: 1,
    name_i18n: {
      [Language.ZH_CN]: '亚妮艾丝',
      [Language.JA]: 'アニエス',
      [Language.EN]: 'Agnès',
    },
    core: new Core(
      new WeaponLine(3, [], []),
      new ShieldLine(4, [], [createElementLimitedSlot(Element.Space, 2)]),
      new DriveLine(4, [], [createElementLimitedSlot(Element.Water, 1)]),
      new ExtraLine(4, [], [createElementLimitedSlot(Element.Space, 2)]),
    ),
  },
  {
    id: 2,
    name_i18n: {
      [Language.ZH_CN]: '菲莉',
      [Language.JA]: 'フェリ',
      [Language.EN]: 'Feri',
    },
    core: new Core(
      new WeaponLine(4, [], [createElementLimitedSlot(Element.Fire, 1)]),
      new ShieldLine(3, [], []),
      new DriveLine(4, [], [createElementLimitedSlot(Element.Mirage, 1)]),
      new ExtraLine(4, [], [createElementLimitedSlot(Element.Fire, 2)]),
    ),
  },
] as Character[]
