import { ElementType } from '../enums/elementType.js'
import { LanguageCode } from '../enums/languageCode.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import type { Quartz, QuartzId } from '../model/quartz.js'

export const EARTH_QUARTZ = [
  {
    id: 0,
    name_i18n: {
      [LanguageCode.ZH_CN]: '防御1',
      [LanguageCode.JA]: '防御1',
      [LanguageCode.EN]: 'Defense 1',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 2]]),
  },
  {
    id: 1,
    name_i18n: {
      [LanguageCode.ZH_CN]: '防御2',
      [LanguageCode.JA]: '防御2',
      [LanguageCode.EN]: 'Defense 2',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 4]]),
  },
  {
    id: 2,
    name_i18n: {
      [LanguageCode.ZH_CN]: '防御3',
      [LanguageCode.JA]: '防御3',
      [LanguageCode.EN]: 'Defense 3',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 6]]),
  },
  {
    id: 3,
    name_i18n: {
      [LanguageCode.ZH_CN]: 'EP1',
      [LanguageCode.JA]: 'EP1',
      [LanguageCode.EN]: 'EP 1',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 2]]),
  },

  {
    id: 4,
    name_i18n: {
      [LanguageCode.ZH_CN]: 'EP2',
      [LanguageCode.JA]: 'EP2',
      [LanguageCode.EN]: 'EP 2',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 4]]),
  },
  {
    id: 5,
    name_i18n: {
      [LanguageCode.ZH_CN]: 'EP3',
      [LanguageCode.JA]: 'EP3',
      [LanguageCode.EN]: 'EP 3',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 6]]),
  },
  {
    id: 6,
    name_i18n: {
      [LanguageCode.ZH_CN]: '琥耀珠',
      [LanguageCode.JA]: '琥耀珠',
      [LanguageCode.EN]: 'Amberl Gem',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 8]]),
  },
  {
    id: 7,
    name_i18n: {
      [LanguageCode.ZH_CN]: '腐蚀之刃',
      [LanguageCode.JA]: '腐蝕の刃',
      [LanguageCode.EN]: 'Rot',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 8,
    name_i18n: {
      [LanguageCode.ZH_CN]: '腐蚀之刃II',
      [LanguageCode.JA]: '腐蝕の刃II',
      [LanguageCode.EN]: 'Rot II',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 9,
    name_i18n: {
      [LanguageCode.ZH_CN]: '地灵之诗',
      [LanguageCode.JA]: '地霊の詩',
      [LanguageCode.EN]: 'Earthen Verse',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 10,
    name_i18n: {
      [LanguageCode.ZH_CN]: '大地之诗',
      [LanguageCode.JA]: '大地の詩',
      [LanguageCode.EN]: 'Gaia Verse',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 11,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黄晶之轮',
      [LanguageCode.JA]: '黄晶の輪',
      [LanguageCode.EN]: 'Topaz Ring',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 12,
    name_i18n: {
      [LanguageCode.ZH_CN]: '刚玉之轮',
      [LanguageCode.JA]: '鋼玉の輪',
      [LanguageCode.EN]: 'Corundum Ring',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([[ElementType.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 13,
    name_i18n: {
      [LanguageCode.ZH_CN]: '耀脉',
      [LanguageCode.JA]: '耀脈',
      [LanguageCode.EN]: 'Septium Vein',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([
      [ElementType.Earth, 4],
      [ElementType.Fire, 2],
    ]),
  },
  {
    id: 14,
    name_i18n: {
      [LanguageCode.ZH_CN]: '秘脉',
      [LanguageCode.JA]: '秘脈',
      [LanguageCode.EN]: '秘脈',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([
      [ElementType.Earth, 5],
      [ElementType.Fire, 3],
    ]),
  },
  {
    id: 15,
    name_i18n: {
      [LanguageCode.ZH_CN]: '巨人',
      [LanguageCode.JA]: 'ゴリアテ',
      [LanguageCode.EN]: 'Goliath',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([
      [ElementType.Earth, 5],
      [ElementType.Time, 3],
    ]),
  },
  {
    id: 16,
    name_i18n: {
      [LanguageCode.ZH_CN]: '安克夏',
      [LanguageCode.JA]: 'アンクシャ',
      [LanguageCode.EN]: 'Ankusha',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([
      [ElementType.Earth, 6],
      [ElementType.Water, 4],
    ]),
  },
  {
    id: 17,
    name_i18n: {
      [LanguageCode.ZH_CN]: '锻神',
      [LanguageCode.JA]: 'デイダラボッチ',
      [LanguageCode.EN]: 'Daidarabotchi',
    },
    elementType: ElementType.Earth,
    elementalValues: new Map([
      [ElementType.Earth, 7],
      [ElementType.Space, 5],
    ]),
  },
] as Quartz[]

export const WATER_QUARTZ = [
  {
    id: 18,
    name_i18n: {
      [LanguageCode.ZH_CN]: 'HP1',
      [LanguageCode.JA]: 'HP1',
      [LanguageCode.EN]: 'HP 1',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 2]]),
  },
  {
    id: 19,
    name_i18n: {
      [LanguageCode.ZH_CN]: 'HP2',
      [LanguageCode.JA]: 'HP2',
      [LanguageCode.EN]: 'HP 2',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 4]]),
  },
  {
    id: 20,
    name_i18n: {
      [LanguageCode.ZH_CN]: 'HP3',
      [LanguageCode.JA]: 'HP3',
      [LanguageCode.EN]: 'HP 3',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 6]]),
  },
  {
    id: 21,
    name_i18n: {
      [LanguageCode.ZH_CN]: '魔防1',
      [LanguageCode.JA]: '魔防1',
      [LanguageCode.EN]: 'Shield 1',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 2]]),
  },
  {
    id: 22,
    name_i18n: {
      [LanguageCode.ZH_CN]: '魔防2',
      [LanguageCode.JA]: '魔防2',
      [LanguageCode.EN]: 'Shield 2',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 4]]),
  },
  {
    id: 23,
    name_i18n: {
      [LanguageCode.ZH_CN]: '魔防3',
      [LanguageCode.JA]: '魔防3',
      [LanguageCode.EN]: 'Shield 3',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 6]]),
  },
  {
    id: 24,
    name_i18n: {
      [LanguageCode.ZH_CN]: '苍耀珠',
      [LanguageCode.JA]: '蒼耀珠',
      [LanguageCode.EN]: 'Sapphirl Gem',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 8]]),
  },
  {
    id: 25,
    name_i18n: {
      [LanguageCode.ZH_CN]: '冻结之刃',
      [LanguageCode.JA]: '凍結の刃',
      [LanguageCode.EN]: 'Freeze',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 26,
    name_i18n: {
      [LanguageCode.ZH_CN]: '冻结之刃II',
      [LanguageCode.JA]: '凍結の刃II',
      [LanguageCode.EN]: 'Freeze II',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 27,
    name_i18n: {
      [LanguageCode.ZH_CN]: '水灵之诗',
      [LanguageCode.JA]: '水霊の詩',
      [LanguageCode.EN]: 'Aqua Verse',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 28,
    name_i18n: {
      [LanguageCode.ZH_CN]: '苍冰之诗',
      [LanguageCode.JA]: '蒼氷の詩',
      [LanguageCode.EN]: 'Crystal Verse',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 29,
    name_i18n: {
      [LanguageCode.ZH_CN]: '青晶之轮',
      [LanguageCode.JA]: '青晶の輪',
      [LanguageCode.EN]: 'Cobalt Ring',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 30,
    name_i18n: {
      [LanguageCode.ZH_CN]: '蓝玉之轮',
      [LanguageCode.JA]: '藍玉の輪',
      [LanguageCode.EN]: 'Indigo Ring',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([[ElementType.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 31,
    name_i18n: {
      [LanguageCode.ZH_CN]: '气息',
      [LanguageCode.JA]: '息吹',
      [LanguageCode.EN]: '息吹',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([
      [ElementType.Water, 4],
      [ElementType.Earth, 2],
    ]),
  },
  {
    id: 32,
    name_i18n: {
      [LanguageCode.ZH_CN]: '慈爱',
      [LanguageCode.JA]: '慈愛',
      [LanguageCode.EN]: 'Mercy',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([
      [ElementType.Water, 5],
      [ElementType.Earth, 3],
    ]),
  },
  {
    id: 33,
    name_i18n: {
      [LanguageCode.ZH_CN]: '卡利俄佩',
      [LanguageCode.JA]: 'カリオペ',
      [LanguageCode.EN]: 'Calliope',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([
      [ElementType.Water, 5],
      [ElementType.Space, 3],
    ]),
  },
  {
    id: 34,
    name_i18n: {
      [LanguageCode.ZH_CN]: '佛罗伦特',
      [LanguageCode.JA]: 'フロレント',
      [LanguageCode.EN]: 'Florent',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([
      [ElementType.Water, 6],
      [ElementType.Fire, 4],
    ]),
  },
  {
    id: 35,
    name_i18n: {
      [LanguageCode.ZH_CN]: '木花朔耶',
      [LanguageCode.JA]: 'コノハナサクヤ',
      [LanguageCode.EN]: 'Konohana Sakuya',
    },
    elementType: ElementType.Water,
    elementalValues: new Map([
      [ElementType.Water, 7],
      [ElementType.Mirage, 5],
    ]),
  },
] as Quartz[]

export const FIRE_QUARTZ = [
  {
    id: 36,
    name_i18n: {
      [LanguageCode.ZH_CN]: '攻击1',
      [LanguageCode.JA]: '攻撃1',
      [LanguageCode.EN]: 'Attack 1',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 2]]),
  },
  {
    id: 37,
    name_i18n: {
      [LanguageCode.ZH_CN]: '攻击2',
      [LanguageCode.JA]: '攻撃2',
      [LanguageCode.EN]: 'Attack 2',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 4]]),
  },
  {
    id: 38,
    name_i18n: {
      [LanguageCode.ZH_CN]: '攻击3',
      [LanguageCode.JA]: '攻撃3',
      [LanguageCode.EN]: 'Attack 3',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 6]]),
  },
  {
    id: 39,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破坏1',
      [LanguageCode.JA]: '破壊1',
      [LanguageCode.EN]: 'Break 1',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 2]]),
  },
  {
    id: 40,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破坏2',
      [LanguageCode.JA]: '破壊2',
      [LanguageCode.EN]: 'Break 2',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 4]]),
  },
  {
    id: 41,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破坏3',
      [LanguageCode.JA]: '破壊3',
      [LanguageCode.EN]: 'Break 3',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 6]]),
  },
  {
    id: 42,
    name_i18n: {
      [LanguageCode.ZH_CN]: '红耀珠',
      [LanguageCode.JA]: '紅耀珠',
      [LanguageCode.EN]: 'Carnelia Gem',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 8]]),
  },
  {
    id: 43,
    name_i18n: {
      [LanguageCode.ZH_CN]: '炎伤之刃',
      [LanguageCode.JA]: '炎傷の刃',
      [LanguageCode.EN]: 'Burn',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 44,
    name_i18n: {
      [LanguageCode.ZH_CN]: '炎伤之刃II',
      [LanguageCode.JA]: '炎傷の刃II',
      [LanguageCode.EN]: 'Burn II',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 45,
    name_i18n: {
      [LanguageCode.ZH_CN]: '火灵之诗',
      [LanguageCode.JA]: '火霊の詩',
      [LanguageCode.EN]: 'Burning Verse',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 46,
    name_i18n: {
      [LanguageCode.ZH_CN]: '业火之诗',
      [LanguageCode.JA]: '業火の詩',
      [LanguageCode.EN]: 'Hellfire Verse',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 47,
    name_i18n: {
      [LanguageCode.ZH_CN]: '赤晶之轮',
      [LanguageCode.JA]: '赤晶の輪',
      [LanguageCode.EN]: 'Ruby Ring',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 48,
    name_i18n: {
      [LanguageCode.ZH_CN]: '红玉之轮',
      [LanguageCode.JA]: '紅玉の輪',
      [LanguageCode.EN]: 'Crimson Ring',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([[ElementType.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 49,
    name_i18n: {
      [LanguageCode.ZH_CN]: '烈火',
      [LanguageCode.JA]: '烈火',
      [LanguageCode.EN]: '烈火',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([
      [ElementType.Fire, 4],
      [ElementType.Wind, 2],
    ]),
  },
  {
    id: 50,
    name_i18n: {
      [LanguageCode.ZH_CN]: '猛炎',
      [LanguageCode.JA]: '猛炎',
      [LanguageCode.EN]: '猛炎',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([
      [ElementType.Fire, 5],
      [ElementType.Wind, 3],
    ]),
  },
  {
    id: 51,
    name_i18n: {
      [LanguageCode.ZH_CN]: '史矛格',
      [LanguageCode.JA]: 'スマウグ',
      [LanguageCode.EN]: 'Smaug',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([
      [ElementType.Fire, 5],
      [ElementType.Water, 3],
    ]),
  },
  {
    id: 52,
    name_i18n: {
      [LanguageCode.ZH_CN]: '英杰',
      [LanguageCode.JA]: 'ベオウルフ',
      [LanguageCode.EN]: 'Beowulf',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([
      [ElementType.Fire, 6],
      [ElementType.Time, 4],
    ]),
  },
  {
    id: 53,
    name_i18n: {
      [LanguageCode.ZH_CN]: '普罗米修斯',
      [LanguageCode.JA]: 'プロメテウス',
      [LanguageCode.EN]: 'Prometheus',
    },
    elementType: ElementType.Fire,
    elementalValues: new Map([
      [ElementType.Fire, 7],
      [ElementType.Mirage, 5],
    ]),
  },
] as Quartz[]

export const WIND_QUARTZ = [
  {
    id: 54,
    name_i18n: {
      [LanguageCode.ZH_CN]: '回避1',
      [LanguageCode.JA]: '回避1',
      [LanguageCode.EN]: 'Evade 1',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 2]]),
  },
  {
    id: 55,
    name_i18n: {
      [LanguageCode.ZH_CN]: '回避2',
      [LanguageCode.JA]: '回避2',
      [LanguageCode.EN]: 'Evade 2',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 4]]),
  },
  {
    id: 56,
    name_i18n: {
      [LanguageCode.ZH_CN]: '回避3',
      [LanguageCode.JA]: '回避3',
      [LanguageCode.EN]: 'Evade 3',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 6]]),
  },
  {
    id: 57,
    name_i18n: {
      [LanguageCode.ZH_CN]: '必杀1',
      [LanguageCode.JA]: '必殺1',
      [LanguageCode.EN]: 'Strike 1',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 2]]),
  },
  {
    id: 58,
    name_i18n: {
      [LanguageCode.ZH_CN]: '必杀2',
      [LanguageCode.JA]: '必殺2',
      [LanguageCode.EN]: 'Strike 2',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 4]]),
  },
  {
    id: 59,
    name_i18n: {
      [LanguageCode.ZH_CN]: '必杀3',
      [LanguageCode.JA]: '必殺3',
      [LanguageCode.EN]: 'Strike 3',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 6]]),
  },
  {
    id: 60,
    name_i18n: {
      [LanguageCode.ZH_CN]: '翠耀珠',
      [LanguageCode.JA]: '翠耀珠',
      [LanguageCode.EN]: 'Esmelas Gem',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 8]]),
  },
  {
    id: 61,
    name_i18n: {
      [LanguageCode.ZH_CN]: '封技之刃',
      [LanguageCode.JA]: '封技の刃',
      [LanguageCode.EN]: 'Seal',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 62,
    name_i18n: {
      [LanguageCode.ZH_CN]: '封技之刃II',
      [LanguageCode.JA]: '封技の刃II',
      [LanguageCode.EN]: 'Seal II',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 63,
    name_i18n: {
      [LanguageCode.ZH_CN]: '风灵之诗',
      [LanguageCode.JA]: '風霊の詩',
      [LanguageCode.EN]: 'Airy Verse',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 64,
    name_i18n: {
      [LanguageCode.ZH_CN]: '威风之诗',
      [LanguageCode.JA]: '威風の詩',
      [LanguageCode.EN]: 'Tempest Verse',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 65,
    name_i18n: {
      [LanguageCode.ZH_CN]: '绿晶之轮',
      [LanguageCode.JA]: '緑晶の輪',
      [LanguageCode.EN]: 'Emerald Ring',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 66,
    name_i18n: {
      [LanguageCode.ZH_CN]: '翠玉之轮',
      [LanguageCode.JA]: '翠玉の輪',
      [LanguageCode.EN]: 'Jade Ring',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([[ElementType.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 67,
    name_i18n: {
      [LanguageCode.ZH_CN]: '异香',
      [LanguageCode.JA]: '美臭',
      [LanguageCode.EN]: 'Scent',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([
      [ElementType.Wind, 4],
      [ElementType.Water, 2],
    ]),
  },
  {
    id: 68,
    name_i18n: {
      [LanguageCode.ZH_CN]: '不屈',
      [LanguageCode.JA]: '不屈',
      [LanguageCode.EN]: '不屈',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([
      [ElementType.Wind, 5],
      [ElementType.Water, 3],
    ]),
  },
  {
    id: 69,
    name_i18n: {
      [LanguageCode.ZH_CN]: '凯兰崔尔',
      [LanguageCode.JA]: 'ガラドリエル',
      [LanguageCode.EN]: 'Galadriel',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([
      [ElementType.Wind, 5],
      [ElementType.Mirage, 3],
    ]),
  },
  {
    id: 70,
    name_i18n: {
      [LanguageCode.ZH_CN]: '草薙',
      [LanguageCode.JA]: 'クサナギ',
      [LanguageCode.EN]: 'Kusanagi',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([
      [ElementType.Wind, 6],
      [ElementType.Space, 4],
    ]),
  },
  {
    id: 71,
    name_i18n: {
      [LanguageCode.ZH_CN]: '猿神',
      [LanguageCode.JA]: 'ハヌマーン',
      [LanguageCode.EN]: 'Hanuman',
    },
    elementType: ElementType.Wind,
    elementalValues: new Map([
      [ElementType.Wind, 7],
      [ElementType.Time, 5],
    ]),
  },
] as Quartz[]

export const TIME_QUARTZ = [
  {
    id: 72,
    name_i18n: {
      [LanguageCode.ZH_CN]: '行动力1',
      [LanguageCode.JA]: '行動力1',
      [LanguageCode.EN]: 'Action 1',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 2]]),
  },
  {
    id: 73,
    name_i18n: {
      [LanguageCode.ZH_CN]: '行动力2',
      [LanguageCode.JA]: '行動力2',
      [LanguageCode.EN]: 'Action 2',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 4]]),
  },
  {
    id: 74,
    name_i18n: {
      [LanguageCode.ZH_CN]: '行动力3',
      [LanguageCode.JA]: '行動力3',
      [LanguageCode.EN]: 'Action 3',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 6]]),
  },
  {
    id: 75,
    name_i18n: {
      [LanguageCode.ZH_CN]: '驱动1',
      [LanguageCode.JA]: '駆動1',
      [LanguageCode.EN]: 'Cast 1',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 2]]),
  },
  {
    id: 76,
    name_i18n: {
      [LanguageCode.ZH_CN]: '驱动2',
      [LanguageCode.JA]: '駆動2',
      [LanguageCode.EN]: 'Cast 2',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 4]]),
  },
  {
    id: 77,
    name_i18n: {
      [LanguageCode.ZH_CN]: '驱动3',
      [LanguageCode.JA]: '駆動3',
      [LanguageCode.EN]: 'Cast 3',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 6]]),
  },
  {
    id: 78,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黑耀珠',
      [LanguageCode.JA]: '黒耀珠',
      [LanguageCode.EN]: 'Nohval Gem',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 8]]),
  },
  {
    id: 79,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黑暗之刃',
      [LanguageCode.JA]: '冥暗の刃',
      [LanguageCode.EN]: 'Blind',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 80,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黑暗之刃II',
      [LanguageCode.JA]: '冥暗の刃II',
      [LanguageCode.EN]: 'Blind II',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 81,
    name_i18n: {
      [LanguageCode.ZH_CN]: '星灵之诗',
      [LanguageCode.JA]: '星霊の詩',
      [LanguageCode.EN]: 'Stellar Verse',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 82,
    name_i18n: {
      [LanguageCode.ZH_CN]: '晓星之诗',
      [LanguageCode.JA]: '暁星の詩',
      [LanguageCode.EN]: 'Dawnstar Verse',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 83,
    name_i18n: {
      [LanguageCode.ZH_CN]: '紫晶之轮',
      [LanguageCode.JA]: '紫晶の輪',
      [LanguageCode.EN]: 'Amethyst Ring',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 84,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黑银之轮',
      [LanguageCode.JA]: '黒銀の輪',
      [LanguageCode.EN]: 'Onyx Ring',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([[ElementType.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 85,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幸运',
      [LanguageCode.JA]: '幸運',
      [LanguageCode.EN]: 'Fortune',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([
      [ElementType.Time, 4],
      [ElementType.Wind, 2],
    ]),
  },
  {
    id: 86,
    name_i18n: {
      [LanguageCode.ZH_CN]: '豪运',
      [LanguageCode.JA]: '豪運',
      [LanguageCode.EN]: '豪運',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([
      [ElementType.Time, 5],
      [ElementType.Wind, 3],
    ]),
  },
  {
    id: 87,
    name_i18n: {
      [LanguageCode.ZH_CN]: '影豹',
      [LanguageCode.JA]: 'バンダースナッチ',
      [LanguageCode.EN]: 'Bandersnatch',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([
      [ElementType.Time, 5],
      [ElementType.Fire, 3],
    ]),
  },
  {
    id: 88,
    name_i18n: {
      [LanguageCode.ZH_CN]: '神矛',
      [LanguageCode.JA]: 'グングニル',
      [LanguageCode.EN]: 'Gungnir',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([
      [ElementType.Time, 6],
      [ElementType.Earth, 4],
    ]),
  },
  {
    id: 89,
    name_i18n: {
      [LanguageCode.ZH_CN]: '赫卡忒',
      [LanguageCode.JA]: 'ヘカテー',
      [LanguageCode.EN]: 'Hecate',
    },
    elementType: ElementType.Time,
    elementalValues: new Map([
      [ElementType.Time, 7],
      [ElementType.Space, 5],
    ]),
  },
] as Quartz[]

export const SPACE_QUARTZ = [
  {
    id: 90,
    name_i18n: {
      [LanguageCode.ZH_CN]: '省EP1',
      [LanguageCode.JA]: '省EP1',
      [LanguageCode.EN]: 'EP Cut 1',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 2]]),
  },
  {
    id: 91,
    name_i18n: {
      [LanguageCode.ZH_CN]: '省EP2',
      [LanguageCode.JA]: '省EP2',
      [LanguageCode.EN]: 'EP Cut 2',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 4]]),
  },
  {
    id: 92,
    name_i18n: {
      [LanguageCode.ZH_CN]: '省EP3',
      [LanguageCode.JA]: '省EP3',
      [LanguageCode.EN]: 'EP Cut 3',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 6]]),
  },
  {
    id: 93,
    name_i18n: {
      [LanguageCode.ZH_CN]: '命中1',
      [LanguageCode.JA]: '命中1',
      [LanguageCode.EN]: 'Hit 1',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 2]]),
  },
  {
    id: 94,
    name_i18n: {
      [LanguageCode.ZH_CN]: '命中2',
      [LanguageCode.JA]: '命中2',
      [LanguageCode.EN]: 'Hit 2',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 4]]),
  },
  {
    id: 95,
    name_i18n: {
      [LanguageCode.ZH_CN]: '命中3',
      [LanguageCode.JA]: '命中3',
      [LanguageCode.EN]: 'Hit 3',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 6]]),
  },
  {
    id: 96,
    name_i18n: {
      [LanguageCode.ZH_CN]: '金耀珠',
      [LanguageCode.JA]: '金耀珠',
      [LanguageCode.EN]: 'Goldia Gem',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 8]]),
  },
  {
    id: 97,
    name_i18n: {
      [LanguageCode.ZH_CN]: '封魔之刃',
      [LanguageCode.JA]: '封魔の刃',
      [LanguageCode.EN]: 'Mute',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 98,
    name_i18n: {
      [LanguageCode.ZH_CN]: '封魔之刃II',
      [LanguageCode.JA]: '封魔の刃II',
      [LanguageCode.EN]: 'Mute II',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 99,
    name_i18n: {
      [LanguageCode.ZH_CN]: '阳灵之诗',
      [LanguageCode.JA]: '陽霊の詩',
      [LanguageCode.EN]: 'Solar Verse',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 100,
    name_i18n: {
      [LanguageCode.ZH_CN]: '极光之诗',
      [LanguageCode.JA]: '極光の詩',
      [LanguageCode.EN]: 'Aurora Verse',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 101,
    name_i18n: {
      [LanguageCode.ZH_CN]: '金晶之轮',
      [LanguageCode.JA]: '金晶の輪',
      [LanguageCode.EN]: 'Citrine Ring',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 102,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黄金之轮',
      [LanguageCode.JA]: '黄金の輪',
      [LanguageCode.EN]: 'Golden Ring',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([[ElementType.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 103,
    name_i18n: {
      [LanguageCode.ZH_CN]: '天启',
      [LanguageCode.JA]: '天啓',
      [LanguageCode.EN]: 'Revelation',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([
      [ElementType.Space, 4],
      [ElementType.Fire, 2],
    ]),
  },
  {
    id: 104,
    name_i18n: {
      [LanguageCode.ZH_CN]: '神谕',
      [LanguageCode.JA]: '神託',
      [LanguageCode.EN]: '神託',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([
      [ElementType.Space, 5],
      [ElementType.Fire, 3],
    ]),
  },
  {
    id: 105,
    name_i18n: {
      [LanguageCode.ZH_CN]: '三月兔',
      [LanguageCode.JA]: 'マーチヘア',
      [LanguageCode.EN]: 'March Hare',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([
      [ElementType.Space, 5],
      [ElementType.Wind, 3],
    ]),
  },
  {
    id: 106,
    name_i18n: {
      [LanguageCode.ZH_CN]: '蛇杖',
      [LanguageCode.JA]: 'カドゥケウス',
      [LanguageCode.EN]: 'Caduceus',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([
      [ElementType.Space, 6],
      [ElementType.Mirage, 4],
    ]),
  },
  {
    id: 107,
    name_i18n: {
      [LanguageCode.ZH_CN]: '库罗索',
      [LanguageCode.JA]: 'クロートー',
      [LanguageCode.EN]: 'Clotho',
    },
    elementType: ElementType.Space,
    elementalValues: new Map([
      [ElementType.Space, 7],
      [ElementType.Earth, 5],
    ]),
  },
] as Quartz[]

export const MIRAGE_QUARTZ = [
  {
    id: 108,
    name_i18n: {
      [LanguageCode.ZH_CN]: '精神1',
      [LanguageCode.JA]: '精神1',
      [LanguageCode.EN]: 'Mind 1',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 2]]),
  },
  {
    id: 109,
    name_i18n: {
      [LanguageCode.ZH_CN]: '精神2',
      [LanguageCode.JA]: '精神2',
      [LanguageCode.EN]: 'Mind 2',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 4]]),
  },
  {
    id: 110,
    name_i18n: {
      [LanguageCode.ZH_CN]: '精神3',
      [LanguageCode.JA]: '精神3',
      [LanguageCode.EN]: 'Mind 3',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 6]]),
  },
  {
    id: 111,
    name_i18n: {
      [LanguageCode.ZH_CN]: '妨碍1',
      [LanguageCode.JA]: '妨害1',
      [LanguageCode.EN]: 'Impede 1',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 2]]),
  },
  {
    id: 112,
    name_i18n: {
      [LanguageCode.ZH_CN]: '妨碍2',
      [LanguageCode.JA]: '妨害2',
      [LanguageCode.EN]: 'Impede 2',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 4]]),
  },
  {
    id: 113,
    name_i18n: {
      [LanguageCode.ZH_CN]: '妨碍3',
      [LanguageCode.JA]: '妨害3',
      [LanguageCode.EN]: 'Impede 3',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 6]]),
  },
  {
    id: 114,
    name_i18n: {
      [LanguageCode.ZH_CN]: '银耀珠',
      [LanguageCode.JA]: '銀耀珠',
      [LanguageCode.EN]: 'Argem Gem',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 8]]),
  },
  {
    id: 115,
    name_i18n: {
      [LanguageCode.ZH_CN]: '恐惧之刃',
      [LanguageCode.JA]: '恐怖の刃',
      [LanguageCode.EN]: 'Fear',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 116,
    name_i18n: {
      [LanguageCode.ZH_CN]: '恐惧之刃II',
      [LanguageCode.JA]: '恐怖の刃II',
      [LanguageCode.EN]: 'Fear II',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 117,
    name_i18n: {
      [LanguageCode.ZH_CN]: '月灵之诗',
      [LanguageCode.JA]: '月霊の詩',
      [LanguageCode.EN]: 'Lunar Verse',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 118,
    name_i18n: {
      [LanguageCode.ZH_CN]: '胧月之诗',
      [LanguageCode.JA]: '朧月の詩',
      [LanguageCode.EN]: 'Misty Verse',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 119,
    name_i18n: {
      [LanguageCode.ZH_CN]: '银晶之轮',
      [LanguageCode.JA]: '銀晶の輪',
      [LanguageCode.EN]: 'Diamond Ring',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 120,
    name_i18n: {
      [LanguageCode.ZH_CN]: '白银之轮',
      [LanguageCode.JA]: '白銀の輪',
      [LanguageCode.EN]: 'Silver Ring',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([[ElementType.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 121,
    name_i18n: {
      [LanguageCode.ZH_CN]: '空蝉',
      [LanguageCode.JA]: '空蝉',
      [LanguageCode.EN]: 'Decoy',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([
      [ElementType.Mirage, 4],
      [ElementType.Water, 2],
    ]),
  },
  {
    id: 122,
    name_i18n: {
      [LanguageCode.ZH_CN]: '隐士',
      [LanguageCode.JA]: '隠者',
      [LanguageCode.EN]: '隠者',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([
      [ElementType.Mirage, 5],
      [ElementType.Water, 3],
    ]),
  },
  {
    id: 123,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻兽',
      [LanguageCode.JA]: 'ジャバウォッキー',
      [LanguageCode.EN]: 'Jabberwocky',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([
      [ElementType.Mirage, 5],
      [ElementType.Earth, 3],
    ]),
  },
  {
    id: 124,
    name_i18n: {
      [LanguageCode.ZH_CN]: '杜兰达尔',
      [LanguageCode.JA]: 'デュランダル',
      [LanguageCode.EN]: 'Durandal',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([
      [ElementType.Mirage, 6],
      [ElementType.Wind, 4],
    ]),
  },
  {
    id: 125,
    name_i18n: {
      [LanguageCode.ZH_CN]: '亚斯特莱尔',
      [LanguageCode.JA]: 'アストライオス',
      [LanguageCode.EN]: 'Astraeus',
    },
    elementType: ElementType.Mirage,
    elementalValues: new Map([
      [ElementType.Mirage, 7],
      [ElementType.Time, 5],
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

export const ALL_QUARTZ_MAP = new Map<QuartzId, Quartz>(
  ALL_QUARTZ.map(quartz => [quartz.id, quartz]),
)
