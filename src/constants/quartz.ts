import { Element } from '../enums/element.js'
import { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import type { Quartz } from '../model/quartz.js'

export const EARTH_QUARTZ = [
  {
    id: 0,
    name_i18n: {
      [Language.ZH_CN]: '防御1',
      [Language.JA]: '防御1',
      [Language.EN]: 'Defense 1',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 1,
    name_i18n: {
      [Language.ZH_CN]: '防御2',
      [Language.JA]: '防御2',
      [Language.EN]: 'Defense 2',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 4]]),
  },
  {
    id: 2,
    name_i18n: {
      [Language.ZH_CN]: '防御3',
      [Language.JA]: '防御3',
      [Language.EN]: 'Defense 3',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 6]]),
  },
  {
    id: 3,
    name_i18n: {
      [Language.ZH_CN]: 'EP1',
      [Language.JA]: 'EP1',
      [Language.EN]: 'EP 1',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 2]]),
  },

  {
    id: 4,
    name_i18n: {
      [Language.ZH_CN]: 'EP2',
      [Language.JA]: 'EP2',
      [Language.EN]: 'EP 2',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 4]]),
  },
  {
    id: 5,
    name_i18n: {
      [Language.ZH_CN]: 'EP3',
      [Language.JA]: 'EP3',
      [Language.EN]: 'EP 3',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 6]]),
  },
  {
    id: 6,
    name_i18n: {
      [Language.ZH_CN]: '琥耀珠',
      [Language.JA]: '琥耀珠',
      [Language.EN]: 'Amberl Gem',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 8]]),
  },
  {
    id: 7,
    name_i18n: {
      [Language.ZH_CN]: '腐蚀之刃',
      [Language.JA]: '腐蝕の刃',
      [Language.EN]: 'Rot',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 8,
    name_i18n: {
      [Language.ZH_CN]: '腐蚀之刃II',
      [Language.JA]: '腐蝕の刃II',
      [Language.EN]: 'Rot II',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 9,
    name_i18n: {
      [Language.ZH_CN]: '地灵之诗',
      [Language.JA]: '地霊の詩',
      [Language.EN]: 'Earthen Verse',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 10,
    name_i18n: {
      [Language.ZH_CN]: '大地之诗',
      [Language.JA]: '大地の詩',
      [Language.EN]: 'Gaia Verse',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 11,
    name_i18n: {
      [Language.ZH_CN]: '黄晶之轮',
      [Language.JA]: '黄晶の輪',
      [Language.EN]: 'Topaz Ring',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 12,
    name_i18n: {
      [Language.ZH_CN]: '刚玉之轮',
      [Language.JA]: '鋼玉の輪',
      [Language.EN]: 'Corundum Ring',
    },
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 13,
    name_i18n: {
      [Language.ZH_CN]: '耀脉',
      [Language.JA]: '耀脈',
      [Language.EN]: 'Septium Vein',
    },
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 4],
      [Element.Fire, 2],
    ]),
  },
  {
    id: 14,
    name_i18n: {
      [Language.ZH_CN]: '秘脉',
      [Language.JA]: '秘脈',
      [Language.EN]: '秘脈',
    },
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 15,
    name_i18n: {
      [Language.ZH_CN]: '巨人',
      [Language.JA]: 'ゴリアテ',
      [Language.EN]: 'Goliath',
    },
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 5],
      [Element.Time, 3],
    ]),
  },
  {
    id: 16,
    name_i18n: {
      [Language.ZH_CN]: '安克夏',
      [Language.JA]: 'アンクシャ',
      [Language.EN]: 'Ankusha',
    },
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 6],
      [Element.Water, 4],
    ]),
  },
  {
    id: 17,
    name_i18n: {
      [Language.ZH_CN]: '锻神',
      [Language.JA]: 'デイダラボッチ',
      [Language.EN]: 'Daidarabotchi',
    },
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 7],
      [Element.Space, 5],
    ]),
  },
] as Quartz[]

export const WATER_QUARTZ = [
  {
    id: 18,
    name_i18n: {
      [Language.ZH_CN]: 'HP1',
      [Language.JA]: 'HP1',
      [Language.EN]: 'HP 1',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 19,
    name_i18n: {
      [Language.ZH_CN]: 'HP2',
      [Language.JA]: 'HP2',
      [Language.EN]: 'HP 2',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 4]]),
  },
  {
    id: 20,
    name_i18n: {
      [Language.ZH_CN]: 'HP3',
      [Language.JA]: 'HP3',
      [Language.EN]: 'HP 3',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 6]]),
  },
  {
    id: 21,
    name_i18n: {
      [Language.ZH_CN]: '魔防1',
      [Language.JA]: '魔防1',
      [Language.EN]: 'Shield 1',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 22,
    name_i18n: {
      [Language.ZH_CN]: '魔防2',
      [Language.JA]: '魔防2',
      [Language.EN]: 'Shield 2',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 4]]),
  },
  {
    id: 23,
    name_i18n: {
      [Language.ZH_CN]: '魔防3',
      [Language.JA]: '魔防3',
      [Language.EN]: 'Shield 3',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 6]]),
  },
  {
    id: 24,
    name_i18n: {
      [Language.ZH_CN]: '苍耀珠',
      [Language.JA]: '蒼耀珠',
      [Language.EN]: 'Sapphirl Gem',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 8]]),
  },
  {
    id: 25,
    name_i18n: {
      [Language.ZH_CN]: '冻结之刃',
      [Language.JA]: '凍結の刃',
      [Language.EN]: 'Freeze',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 26,
    name_i18n: {
      [Language.ZH_CN]: '冻结之刃II',
      [Language.JA]: '凍結の刃II',
      [Language.EN]: 'Freeze II',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 27,
    name_i18n: {
      [Language.ZH_CN]: '水灵之诗',
      [Language.JA]: '水霊の詩',
      [Language.EN]: 'Aqua Verse',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 28,
    name_i18n: {
      [Language.ZH_CN]: '苍冰之诗',
      [Language.JA]: '蒼氷の詩',
      [Language.EN]: 'Crystal Verse',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 29,
    name_i18n: {
      [Language.ZH_CN]: '青晶之轮',
      [Language.JA]: '青晶の輪',
      [Language.EN]: 'Cobalt Ring',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 30,
    name_i18n: {
      [Language.ZH_CN]: '蓝玉之轮',
      [Language.JA]: '藍玉の輪',
      [Language.EN]: 'Indigo Ring',
    },
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 31,
    name_i18n: {
      [Language.ZH_CN]: '气息',
      [Language.JA]: '息吹',
      [Language.EN]: '息吹',
    },
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 4],
      [Element.Earth, 2],
    ]),
  },
  {
    id: 32,
    name_i18n: {
      [Language.ZH_CN]: '慈爱',
      [Language.JA]: '慈愛',
      [Language.EN]: 'Mercy',
    },
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 5],
      [Element.Earth, 3],
    ]),
  },
  {
    id: 33,
    name_i18n: {
      [Language.ZH_CN]: '卡利俄佩',
      [Language.JA]: 'カリオペ',
      [Language.EN]: 'Calliope',
    },
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 5],
      [Element.Space, 3],
    ]),
  },
  {
    id: 34,
    name_i18n: {
      [Language.ZH_CN]: '佛罗伦特',
      [Language.JA]: 'フロレント',
      [Language.EN]: 'Florent',
    },
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 6],
      [Element.Fire, 4],
    ]),
  },
  {
    id: 35,
    name_i18n: {
      [Language.ZH_CN]: '木花朔耶',
      [Language.JA]: 'コノハナサクヤ',
      [Language.EN]: 'Konohana Sakuya',
    },
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 7],
      [Element.Mirage, 5],
    ]),
  },
] as Quartz[]

export const FIRE_QUARTZ = [
  {
    id: 36,
    name_i18n: {
      [Language.ZH_CN]: '攻击1',
      [Language.JA]: '攻撃1',
      [Language.EN]: 'Attack 1',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 37,
    name_i18n: {
      [Language.ZH_CN]: '攻击2',
      [Language.JA]: '攻撃2',
      [Language.EN]: 'Attack 2',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 4]]),
  },
  {
    id: 38,
    name_i18n: {
      [Language.ZH_CN]: '攻击3',
      [Language.JA]: '攻撃3',
      [Language.EN]: 'Attack 3',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 6]]),
  },
  {
    id: 39,
    name_i18n: {
      [Language.ZH_CN]: '破坏1',
      [Language.JA]: '破壊1',
      [Language.EN]: 'Break 1',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 40,
    name_i18n: {
      [Language.ZH_CN]: '破坏2',
      [Language.JA]: '破壊2',
      [Language.EN]: 'Break 2',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 4]]),
  },
  {
    id: 41,
    name_i18n: {
      [Language.ZH_CN]: '破坏3',
      [Language.JA]: '破壊3',
      [Language.EN]: 'Break 3',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 6]]),
  },
  {
    id: 42,
    name_i18n: {
      [Language.ZH_CN]: '红耀珠',
      [Language.JA]: '紅耀珠',
      [Language.EN]: 'Carnelia Gem',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 8]]),
  },
  {
    id: 43,
    name_i18n: {
      [Language.ZH_CN]: '炎伤之刃',
      [Language.JA]: '炎傷の刃',
      [Language.EN]: 'Burn',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 44,
    name_i18n: {
      [Language.ZH_CN]: '炎伤之刃II',
      [Language.JA]: '炎傷の刃II',
      [Language.EN]: 'Burn II',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 45,
    name_i18n: {
      [Language.ZH_CN]: '火灵之诗',
      [Language.JA]: '火霊の詩',
      [Language.EN]: 'Burning Verse',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 46,
    name_i18n: {
      [Language.ZH_CN]: '业火之诗',
      [Language.JA]: '業火の詩',
      [Language.EN]: 'Hellfire Verse',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 47,
    name_i18n: {
      [Language.ZH_CN]: '赤晶之轮',
      [Language.JA]: '赤晶の輪',
      [Language.EN]: 'Ruby Ring',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 48,
    name_i18n: {
      [Language.ZH_CN]: '红玉之轮',
      [Language.JA]: '紅玉の輪',
      [Language.EN]: 'Crimson Ring',
    },
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 49,
    name_i18n: {
      [Language.ZH_CN]: '烈火',
      [Language.JA]: '烈火',
      [Language.EN]: '烈火',
    },
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 4],
      [Element.Wind, 2],
    ]),
  },
  {
    id: 50,
    name_i18n: {
      [Language.ZH_CN]: '猛炎',
      [Language.JA]: '猛炎',
      [Language.EN]: '猛炎',
    },
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 5],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 51,
    name_i18n: {
      [Language.ZH_CN]: '史矛格',
      [Language.JA]: 'スマウグ',
      [Language.EN]: 'Smaug',
    },
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 5],
      [Element.Water, 3],
    ]),
  },
  {
    id: 52,
    name_i18n: {
      [Language.ZH_CN]: '英杰',
      [Language.JA]: 'ベオウルフ',
      [Language.EN]: 'Beowulf',
    },
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 6],
      [Element.Time, 4],
    ]),
  },
  {
    id: 53,
    name_i18n: {
      [Language.ZH_CN]: '普罗米修斯',
      [Language.JA]: 'プロメテウス',
      [Language.EN]: 'Prometheus',
    },
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 7],
      [Element.Mirage, 5],
    ]),
  },
] as Quartz[]

export const WIND_QUARTZ = [
  {
    id: 54,
    name_i18n: {
      [Language.ZH_CN]: '回避1',
      [Language.JA]: '回避1',
      [Language.EN]: 'Evade 1',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 55,
    name_i18n: {
      [Language.ZH_CN]: '回避2',
      [Language.JA]: '回避2',
      [Language.EN]: 'Evade 2',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 4]]),
  },
  {
    id: 56,
    name_i18n: {
      [Language.ZH_CN]: '回避3',
      [Language.JA]: '回避3',
      [Language.EN]: 'Evade 3',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 6]]),
  },
  {
    id: 57,
    name_i18n: {
      [Language.ZH_CN]: '必杀1',
      [Language.JA]: '必殺1',
      [Language.EN]: 'Strike 1',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 58,
    name_i18n: {
      [Language.ZH_CN]: '必杀2',
      [Language.JA]: '必殺2',
      [Language.EN]: 'Strike 2',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 4]]),
  },
  {
    id: 59,
    name_i18n: {
      [Language.ZH_CN]: '必杀3',
      [Language.JA]: '必殺3',
      [Language.EN]: 'Strike 3',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 6]]),
  },
  {
    id: 60,
    name_i18n: {
      [Language.ZH_CN]: '翠耀珠',
      [Language.JA]: '翠耀珠',
      [Language.EN]: 'Esmelas Gem',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 8]]),
  },
  {
    id: 61,
    name_i18n: {
      [Language.ZH_CN]: '封技之刃',
      [Language.JA]: '封技の刃',
      [Language.EN]: 'Seal',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 62,
    name_i18n: {
      [Language.ZH_CN]: '封技之刃II',
      [Language.JA]: '封技の刃II',
      [Language.EN]: 'Seal II',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 63,
    name_i18n: {
      [Language.ZH_CN]: '风灵之诗',
      [Language.JA]: '風霊の詩',
      [Language.EN]: 'Airy Verse',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 64,
    name_i18n: {
      [Language.ZH_CN]: '威风之诗',
      [Language.JA]: '威風の詩',
      [Language.EN]: 'Tempest Verse',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 65,
    name_i18n: {
      [Language.ZH_CN]: '绿晶之轮',
      [Language.JA]: '緑晶の輪',
      [Language.EN]: 'Emerald Ring',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 66,
    name_i18n: {
      [Language.ZH_CN]: '翠玉之轮',
      [Language.JA]: '翠玉の輪',
      [Language.EN]: 'Jade Ring',
    },
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 67,
    name_i18n: {
      [Language.ZH_CN]: '异香',
      [Language.JA]: '美臭',
      [Language.EN]: 'Scent',
    },
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 4],
      [Element.Water, 2],
    ]),
  },
  {
    id: 68,
    name_i18n: {
      [Language.ZH_CN]: '不屈',
      [Language.JA]: '不屈',
      [Language.EN]: '不屈',
    },
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Water, 3],
    ]),
  },
  {
    id: 69,
    name_i18n: {
      [Language.ZH_CN]: '凯兰崔尔',
      [Language.JA]: 'ガラドリエル',
      [Language.EN]: 'Galadriel',
    },
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Mirage, 3],
    ]),
  },
  {
    id: 70,
    name_i18n: {
      [Language.ZH_CN]: '草薙',
      [Language.JA]: 'クサナギ',
      [Language.EN]: 'Kusanagi',
    },
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Space, 4],
    ]),
  },
  {
    id: 71,
    name_i18n: {
      [Language.ZH_CN]: '猿神',
      [Language.JA]: 'ハヌマーン',
      [Language.EN]: 'Hanuman',
    },
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 7],
      [Element.Time, 5],
    ]),
  },
] as Quartz[]

export const TIME_QUARTZ = [
  {
    id: 72,
    name_i18n: {
      [Language.ZH_CN]: '行动力1',
      [Language.JA]: '行動力1',
      [Language.EN]: 'Action 1',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 73,
    name_i18n: {
      [Language.ZH_CN]: '行动力2',
      [Language.JA]: '行動力2',
      [Language.EN]: 'Action 2',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 4]]),
  },
  {
    id: 74,
    name_i18n: {
      [Language.ZH_CN]: '行动力3',
      [Language.JA]: '行動力3',
      [Language.EN]: 'Action 3',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 6]]),
  },
  {
    id: 75,
    name_i18n: {
      [Language.ZH_CN]: '驱动1',
      [Language.JA]: '駆動1',
      [Language.EN]: 'Cast 1',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 76,
    name_i18n: {
      [Language.ZH_CN]: '驱动2',
      [Language.JA]: '駆動2',
      [Language.EN]: 'Cast 2',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 4]]),
  },
  {
    id: 77,
    name_i18n: {
      [Language.ZH_CN]: '驱动3',
      [Language.JA]: '駆動3',
      [Language.EN]: 'Cast 3',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 6]]),
  },
  {
    id: 78,
    name_i18n: {
      [Language.ZH_CN]: '黑耀珠',
      [Language.JA]: '黒耀珠',
      [Language.EN]: 'Nohval Gem',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 8]]),
  },
  {
    id: 79,
    name_i18n: {
      [Language.ZH_CN]: '黑暗之刃',
      [Language.JA]: '冥暗の刃',
      [Language.EN]: 'Blind',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 80,
    name_i18n: {
      [Language.ZH_CN]: '黑暗之刃II',
      [Language.JA]: '冥暗の刃II',
      [Language.EN]: 'Blind II',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 81,
    name_i18n: {
      [Language.ZH_CN]: '星灵之诗',
      [Language.JA]: '星霊の詩',
      [Language.EN]: 'Stellar Verse',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 82,
    name_i18n: {
      [Language.ZH_CN]: '晓星之诗',
      [Language.JA]: '暁星の詩',
      [Language.EN]: 'Dawnstar Verse',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 83,
    name_i18n: {
      [Language.ZH_CN]: '紫晶之轮',
      [Language.JA]: '紫晶の輪',
      [Language.EN]: 'Amethyst Ring',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 84,
    name_i18n: {
      [Language.ZH_CN]: '黑银之轮',
      [Language.JA]: '黒銀の輪',
      [Language.EN]: 'Onyx Ring',
    },
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 85,
    name_i18n: {
      [Language.ZH_CN]: '幸运',
      [Language.JA]: '幸運',
      [Language.EN]: 'Fortune',
    },
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 4],
      [Element.Wind, 2],
    ]),
  },
  {
    id: 86,
    name_i18n: {
      [Language.ZH_CN]: '豪运',
      [Language.JA]: '豪運',
      [Language.EN]: '豪運',
    },
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 87,
    name_i18n: {
      [Language.ZH_CN]: '影豹',
      [Language.JA]: 'バンダースナッチ',
      [Language.EN]: 'Bandersnatch',
    },
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 88,
    name_i18n: {
      [Language.ZH_CN]: '神矛',
      [Language.JA]: 'グングニル',
      [Language.EN]: 'Gungnir',
    },
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 6],
      [Element.Earth, 4],
    ]),
  },
  {
    id: 89,
    name_i18n: {
      [Language.ZH_CN]: '赫卡忒',
      [Language.JA]: 'ヘカテー',
      [Language.EN]: 'Hecate',
    },
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 7],
      [Element.Space, 5],
    ]),
  },
] as Quartz[]

export const SPACE_QUARTZ = [
  {
    id: 90,
    name_i18n: {
      [Language.ZH_CN]: '省EP1',
      [Language.JA]: '省EP1',
      [Language.EN]: 'EP Cut 1',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 91,
    name_i18n: {
      [Language.ZH_CN]: '省EP2',
      [Language.JA]: '省EP2',
      [Language.EN]: 'EP Cut 2',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 4]]),
  },
  {
    id: 92,
    name_i18n: {
      [Language.ZH_CN]: '省EP3',
      [Language.JA]: '省EP3',
      [Language.EN]: 'EP Cut 3',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 6]]),
  },
  {
    id: 93,
    name_i18n: {
      [Language.ZH_CN]: '命中1',
      [Language.JA]: '命中1',
      [Language.EN]: 'Hit 1',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 94,
    name_i18n: {
      [Language.ZH_CN]: '命中2',
      [Language.JA]: '命中2',
      [Language.EN]: 'Hit 2',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 4]]),
  },
  {
    id: 95,
    name_i18n: {
      [Language.ZH_CN]: '命中3',
      [Language.JA]: '命中3',
      [Language.EN]: 'Hit 3',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 6]]),
  },
  {
    id: 96,
    name_i18n: {
      [Language.ZH_CN]: '金耀珠',
      [Language.JA]: '金耀珠',
      [Language.EN]: 'Goldia Gem',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 8]]),
  },
  {
    id: 97,
    name_i18n: {
      [Language.ZH_CN]: '封魔之刃',
      [Language.JA]: '封魔の刃',
      [Language.EN]: 'Mute',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 98,
    name_i18n: {
      [Language.ZH_CN]: '封魔之刃II',
      [Language.JA]: '封魔の刃II',
      [Language.EN]: 'Mute II',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 99,
    name_i18n: {
      [Language.ZH_CN]: '阳灵之诗',
      [Language.JA]: '陽霊の詩',
      [Language.EN]: 'Solar Verse',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 100,
    name_i18n: {
      [Language.ZH_CN]: '极光之诗',
      [Language.JA]: '極光の詩',
      [Language.EN]: 'Aurora Verse',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 101,
    name_i18n: {
      [Language.ZH_CN]: '金晶之轮',
      [Language.JA]: '金晶の輪',
      [Language.EN]: 'Citrine Ring',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 102,
    name_i18n: {
      [Language.ZH_CN]: '黄金之轮',
      [Language.JA]: '黄金の輪',
      [Language.EN]: 'Golden Ring',
    },
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 103,
    name_i18n: {
      [Language.ZH_CN]: '天启',
      [Language.JA]: '天啓',
      [Language.EN]: 'Revelation',
    },
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 4],
      [Element.Fire, 2],
    ]),
  },
  {
    id: 104,
    name_i18n: {
      [Language.ZH_CN]: '神谕',
      [Language.JA]: '神託',
      [Language.EN]: '神託',
    },
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 105,
    name_i18n: {
      [Language.ZH_CN]: '三月兔',
      [Language.JA]: 'マーチヘア',
      [Language.EN]: 'March Hare',
    },
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 106,
    name_i18n: {
      [Language.ZH_CN]: '蛇杖',
      [Language.JA]: 'カドゥケウス',
      [Language.EN]: 'Caduceus',
    },
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 6],
      [Element.Mirage, 4],
    ]),
  },
  {
    id: 107,
    name_i18n: {
      [Language.ZH_CN]: '库罗索',
      [Language.JA]: 'クロートー',
      [Language.EN]: 'Clotho',
    },
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 7],
      [Element.Earth, 5],
    ]),
  },
] as Quartz[]

export const MIRAGE_QUARTZ = [
  {
    id: 108,
    name_i18n: {
      [Language.ZH_CN]: '精神1',
      [Language.JA]: '精神1',
      [Language.EN]: 'Mind 1',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 109,
    name_i18n: {
      [Language.ZH_CN]: '精神2',
      [Language.JA]: '精神2',
      [Language.EN]: 'Mind 2',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 4]]),
  },
  {
    id: 110,
    name_i18n: {
      [Language.ZH_CN]: '精神3',
      [Language.JA]: '精神3',
      [Language.EN]: 'Mind 3',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 6]]),
  },
  {
    id: 111,
    name_i18n: {
      [Language.ZH_CN]: '妨碍1',
      [Language.JA]: '妨害1',
      [Language.EN]: 'Impede 1',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 112,
    name_i18n: {
      [Language.ZH_CN]: '妨碍2',
      [Language.JA]: '妨害2',
      [Language.EN]: 'Impede 2',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 4]]),
  },
  {
    id: 113,
    name_i18n: {
      [Language.ZH_CN]: '妨碍3',
      [Language.JA]: '妨害3',
      [Language.EN]: 'Impede 3',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 6]]),
  },
  {
    id: 114,
    name_i18n: {
      [Language.ZH_CN]: '银耀珠',
      [Language.JA]: '銀耀珠',
      [Language.EN]: 'Argem Gem',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 8]]),
  },
  {
    id: 115,
    name_i18n: {
      [Language.ZH_CN]: '恐惧之刃',
      [Language.JA]: '恐怖の刃',
      [Language.EN]: 'Fear',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 116,
    name_i18n: {
      [Language.ZH_CN]: '恐惧之刃II',
      [Language.JA]: '恐怖の刃II',
      [Language.EN]: 'Fear II',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 117,
    name_i18n: {
      [Language.ZH_CN]: '月灵之诗',
      [Language.JA]: '月霊の詩',
      [Language.EN]: 'Lunar Verse',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 118,
    name_i18n: {
      [Language.ZH_CN]: '胧月之诗',
      [Language.JA]: '朧月の詩',
      [Language.EN]: 'Misty Verse',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 119,
    name_i18n: {
      [Language.ZH_CN]: '银晶之轮',
      [Language.JA]: '銀晶の輪',
      [Language.EN]: 'Diamond Ring',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 120,
    name_i18n: {
      [Language.ZH_CN]: '白银之轮',
      [Language.JA]: '白銀の輪',
      [Language.EN]: 'Silver Ring',
    },
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 121,
    name_i18n: {
      [Language.ZH_CN]: '空蝉',
      [Language.JA]: '空蝉',
      [Language.EN]: 'Decoy',
    },
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 4],
      [Element.Water, 2],
    ]),
  },
  {
    id: 122,
    name_i18n: {
      [Language.ZH_CN]: '隐士',
      [Language.JA]: '隠者',
      [Language.EN]: '隠者',
    },
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Water, 3],
    ]),
  },
  {
    id: 123,
    name_i18n: {
      [Language.ZH_CN]: '幻兽',
      [Language.JA]: 'ジャバウォッキー',
      [Language.EN]: 'Jabberwocky',
    },
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Earth, 3],
    ]),
  },
  {
    id: 124,
    name_i18n: {
      [Language.ZH_CN]: '杜兰达尔',
      [Language.JA]: 'デュランダル',
      [Language.EN]: 'Durandal',
    },
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Wind, 4],
    ]),
  },
  {
    id: 125,
    name_i18n: {
      [Language.ZH_CN]: '亚斯特莱尔',
      [Language.JA]: 'アストライオス',
      [Language.EN]: 'Astraeus',
    },
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 7],
      [Element.Time, 5],
    ]),
  },
] as Quartz[]

export const ALL_QUARTZ = [
  ...EARTH_QUARTZ,
  ...WATER_QUARTZ,
  ...FIRE_QUARTZ,
  ...WIND_QUARTZ,
  ...TIME_QUARTZ,
  ...SPACE_QUARTZ,
  ...MIRAGE_QUARTZ,
] as Quartz[]

export const ALL_QUARTZ_MAP = new Map<number, Quartz>(
  ALL_QUARTZ.map(quartz => [quartz.id, quartz]),
)
