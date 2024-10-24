import { Element } from '../enums/element.js'
import { Language } from '../enums/language.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import type { ShardSkill, ShardSkillId } from '../model/shardSkill.js'

export const WEAPON_LINE_SHARD_SKILLS = [
  {
    id: 0,
    name_jp: 'アースインパクト',
    name_i18n: {
      [Language.ZH_CN]: '大地冲击',
      [Language.JA]: 'アースインパクト',
      [Language.EN]: 'Earth Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 1,
    name_i18n: {
      [Language.ZH_CN]: '水花冲击',
      [Language.JA]: 'アクアインパクト',
      [Language.EN]: 'Aqua Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 2,
    name_i18n: {
      [Language.ZH_CN]: '火光冲击',
      [Language.JA]: 'フレアインパクト',
      [Language.EN]: 'Flare Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 3,
    name_i18n: {
      [Language.ZH_CN]: '疾风冲击',
      [Language.JA]: 'ゲイルインパクト',
      [Language.EN]: 'Gale Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 4,
    name_i18n: {
      [Language.ZH_CN]: '时光冲击',
      [Language.JA]: 'クロノインパクト',
      [Language.EN]: 'Chrono Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 5,
    name_i18n: {
      [Language.ZH_CN]: '碧空冲击',
      [Language.JA]: 'ゴルトインパクト',
      [Language.EN]: 'Cosmic Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 6,
    name_i18n: {
      [Language.ZH_CN]: '幻影冲击',
      [Language.JA]: 'カオスインパクト',
      [Language.EN]: 'Chaos Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 7,
    name_i18n: {
      [Language.ZH_CN]: '大地冲击II',
      [Language.JA]: 'アースインパクトII',
      [Language.EN]: 'Earth Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Earth, 8]]),
    baseShardSkillId: 0,
  },
  {
    id: 8,
    name_i18n: {
      [Language.ZH_CN]: '水花冲击II',
      [Language.JA]: 'アクアインパクトII',
      [Language.EN]: 'Aqua Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Water, 8]]),
    baseShardSkillId: 1,
  },
  {
    id: 9,
    name_i18n: {
      [Language.ZH_CN]: '火光冲击II',
      [Language.JA]: 'フレアインパクトII',
      [Language.EN]: 'Flare Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Fire, 8]]),
    baseShardSkillId: 2,
  },
  {
    id: 10,
    name_i18n: {
      [Language.ZH_CN]: '疾风冲击II',
      [Language.JA]: 'ゲイルインパクトII',
      [Language.EN]: 'Gale Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Wind, 8]]),
    baseShardSkillId: 3,
  },
  {
    id: 11,
    name_i18n: {
      [Language.ZH_CN]: '时光冲击II',
      [Language.JA]: 'クロノインパクトII',
      [Language.EN]: 'Chrono Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Time, 8]]),
    baseShardSkillId: 4,
  },
  {
    id: 12,
    name_i18n: {
      [Language.ZH_CN]: '碧空冲击II',
      [Language.JA]: 'ゴルトインパクトII',
      [Language.EN]: 'Cosmic Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Space, 8]]),
    baseShardSkillId: 5,
  },
  {
    id: 13,
    name_i18n: {
      [Language.ZH_CN]: '幻影冲击II',
      [Language.JA]: 'カオスインパクトII',
      [Language.EN]: 'Chaos Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Mirage, 8]]),
    baseShardSkillId: 6,
  },
  {
    id: 14,
    name_i18n: {
      [Language.ZH_CN]: '破剑者',
      [Language.JA]: 'ソードブレイカー',
      [Language.EN]: 'Sword Breaker',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Fire, 3],
      [Element.Space, 5],
    ]),
  },
  {
    id: 15,
    name_i18n: {
      [Language.ZH_CN]: '破剑者改',
      [Language.JA]: 'ソードブレイカー改',
      [Language.EN]: 'ソードブレイカー改',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Fire, 5],
      [Element.Space, 10],
    ]),
    baseShardSkillId: 14,
  },
  {
    id: 16,
    name_i18n: {
      [Language.ZH_CN]: '破盾者',
      [Language.JA]: 'シールドブレイカー',
      [Language.EN]: 'Shield Breaker',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Earth, 5],
      [Element.Time, 3],
    ]),
  },
  {
    id: 17,
    name_i18n: {
      [Language.ZH_CN]: '破盾者改',
      [Language.JA]: 'シールドブレイカー改',
      [Language.EN]: 'シールドブレイカー改',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Earth, 10],
      [Element.Time, 5],
    ]),
    baseShardSkillId: 16,
  },
  {
    id: 18,
    name_i18n: {
      [Language.ZH_CN]: '破剑突袭',
      [Language.JA]: '破剣の強襲',
      [Language.EN]: 'Sword Breaker Barrage',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Space, 3],
      [Element.Mirage, 5],
    ]),
  },
  {
    id: 19,
    name_i18n: {
      [Language.ZH_CN]: '超破剑突袭',
      [Language.JA]: '破剣の超強襲',
      [Language.EN]: '破剣の超強襲',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Mirage, 10],
    ]),
    baseShardSkillId: 18,
  },
  {
    id: 20,
    name_i18n: {
      [Language.ZH_CN]: '破盾突袭',
      [Language.JA]: '破盾の強襲',
      [Language.EN]: 'Shield Breaker Barrage',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Water, 5],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 21,
    name_i18n: {
      [Language.ZH_CN]: '超破盾突袭',
      [Language.JA]: '破盾の超強襲',
      [Language.EN]: '破盾の超強襲',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Water, 10],
      [Element.Wind, 5],
    ]),
    baseShardSkillId: 20,
  },
  {
    id: 22,
    name_i18n: {
      [Language.ZH_CN]: '致命追击',
      [Language.JA]: 'フェイタルランサー',
      [Language.EN]: 'Fatal Lance',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Earth, 3],
      [Element.Time, 6],
    ]),
  },
  {
    id: 23,
    name_i18n: {
      [Language.ZH_CN]: '致命追击改',
      [Language.JA]: 'フェイタルランサー改',
      [Language.EN]: 'Deadly Lance',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Earth, 6],
      [Element.Time, 12],
    ]),
    baseShardSkillId: 22,
  },
  {
    id: 24,
    name_i18n: {
      [Language.ZH_CN]: '爆裂吸收',
      [Language.JA]: 'バーストゲイン',
      [Language.EN]: 'Burst Gain',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Water, 3],
      [Element.Fire, 6],
    ]),
  },
  {
    id: 25,
    name_i18n: {
      [Language.ZH_CN]: '爆裂吸收II',
      [Language.JA]: 'バーストゲインII',
      [Language.EN]: 'バーストゲインII',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Water, 6],
      [Element.Fire, 12],
    ]),
    baseShardSkillId: 24,
  },
  {
    id: 26,
    name_i18n: {
      [Language.ZH_CN]: '处刑者',
      [Language.JA]: 'エクスキューショナー',
      [Language.EN]: 'Executioner',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Mirage, 3],
    ]),
  },
  {
    id: 27,
    name_i18n: {
      [Language.ZH_CN]: '处刑者改',
      [Language.JA]: 'エクスキューショナー改',
      [Language.EN]: 'エクスキューショナー改',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Wind, 12],
      [Element.Mirage, 6],
    ]),
    baseShardSkillId: 26,
  },
] as ShardSkill[]

export const SHIELD_LINE_SHARD_SKILLS = [
  {
    id: 28,
    name_i18n: {
      [Language.ZH_CN]: '大地抗性',
      [Language.JA]: 'アースレジスト',
      [Language.EN]: 'Resist Rot',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 29,
    name_i18n: {
      [Language.ZH_CN]: '水花抗性',
      [Language.JA]: 'アクアレジスト',
      [Language.EN]: 'Resist Freeze',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 30,
    name_i18n: {
      [Language.ZH_CN]: '火光抗性',
      [Language.JA]: 'フレアレジスト',
      [Language.EN]: 'Resist Burn',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 31,
    name_i18n: {
      [Language.ZH_CN]: '疾风抗性',
      [Language.JA]: 'ゲイルレジスト',
      [Language.EN]: 'Resist Seal',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 32,
    name_i18n: {
      [Language.ZH_CN]: '黑暗抗性',
      [Language.JA]: 'ダークレジスト',
      [Language.EN]: 'Resist Blind',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 33,
    name_i18n: {
      [Language.ZH_CN]: '碧空抗性',
      [Language.JA]: 'ゴルトレジスト',
      [Language.EN]: 'Resist Mute',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 34,
    name_i18n: {
      [Language.ZH_CN]: '幻影抗性',
      [Language.JA]: 'カオスレジスト',
      [Language.EN]: 'Resist Fear',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 35,
    name_i18n: {
      [Language.ZH_CN]: '大地抗性II',
      [Language.JA]: 'アースレジストII',
      [Language.EN]: 'Resist Rot II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Earth, 8]]),
    baseShardSkillId: 28,
  },
  {
    id: 36,
    name_i18n: {
      [Language.ZH_CN]: '水花抗性II',
      [Language.JA]: 'アクアレジストII',
      [Language.EN]: 'Resist Freeze II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Water, 8]]),
    baseShardSkillId: 29,
  },
  {
    id: 37,
    name_i18n: {
      [Language.ZH_CN]: '火光抗性II',
      [Language.JA]: 'フレアレジストII',
      [Language.EN]: 'Resist Burn II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Fire, 8]]),
    baseShardSkillId: 30,
  },
  {
    id: 38,
    name_i18n: {
      [Language.ZH_CN]: '疾风抗性II',
      [Language.JA]: 'ゲイルレジストII',
      [Language.EN]: 'Resist Seal II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Wind, 8]]),
    baseShardSkillId: 31,
  },
  {
    id: 39,
    name_i18n: {
      [Language.ZH_CN]: '黑暗抗性II',
      [Language.JA]: 'ダークレジストII',
      [Language.EN]: 'Resist Blind II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Time, 8]]),
    baseShardSkillId: 32,
  },
  {
    id: 40,
    name_i18n: {
      [Language.ZH_CN]: '碧空抗性II',
      [Language.JA]: 'ゴルトレジストII',
      [Language.EN]: 'Resist Mute II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Space, 8]]),
    baseShardSkillId: 33,
  },
  {
    id: 41,
    name_i18n: {
      [Language.ZH_CN]: '幻影抗性II',
      [Language.JA]: 'カオスレジストII',
      [Language.EN]: 'Resist Fear II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Mirage, 8]]),
    baseShardSkillId: 34,
  },
  {
    id: 42,
    name_i18n: {
      [Language.ZH_CN]: '治疗防御',
      [Language.JA]: 'リカバーガード',
      [Language.EN]: 'Regen Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Water, 4],
      [Element.Space, 2],
    ]),
  },
  {
    id: 43,
    name_i18n: {
      [Language.ZH_CN]: '自动治疗防御',
      [Language.JA]: 'Aリカバーガード',
      [Language.EN]: 'Auto Regen Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Water, 10],
      [Element.Space, 5],
    ]),
    baseShardSkillId: 42,
  },
  {
    id: 44,
    name_i18n: {
      [Language.ZH_CN]: '充能防御',
      [Language.JA]: 'ライズガード',
      [Language.EN]: 'Impassion Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Fire, 2],
      [Element.Wind, 4],
    ]),
  },
  {
    id: 45,
    name_i18n: {
      [Language.ZH_CN]: '自动充能防御',
      [Language.JA]: 'Aライズガード',
      [Language.EN]: 'Auto Impassion Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Fire, 5],
      [Element.Wind, 10],
    ]),
    baseShardSkillId: 44,
  },
  {
    id: 46,
    name_i18n: {
      [Language.ZH_CN]: '强攻防御',
      [Language.JA]: 'フォルテガード',
      [Language.EN]: 'Forte Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Fire, 4],
      [Element.Mirage, 2],
    ]),
  },
  {
    id: 47,
    name_i18n: {
      [Language.ZH_CN]: '自动强攻防御',
      [Language.JA]: 'Aフォルテガード',
      [Language.EN]: 'Auto Forte Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Fire, 10],
      [Element.Mirage, 5],
    ]),
    baseShardSkillId: 46,
  },
  {
    id: 48,
    name_i18n: {
      [Language.ZH_CN]: '结晶防御',
      [Language.JA]: 'クレストガード',
      [Language.EN]: 'Crest Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Earth, 2],
      [Element.Time, 1],
    ]),
  },
  {
    id: 49,
    name_i18n: {
      [Language.ZH_CN]: '自动结晶防御',
      [Language.JA]: 'Aクレストガード',
      [Language.EN]: 'Auto Crest Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Earth, 10],
      [Element.Time, 5],
    ]),
    baseShardSkillId: 48,
  },
  {
    id: 50,
    name_i18n: {
      [Language.ZH_CN]: '掩护之盾',
      [Language.JA]: 'カバーシールド',
      [Language.EN]: 'Guardian',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Earth, 3],
      [Element.Mirage, 6],
    ]),
  },
  {
    id: 51,
    name_i18n: {
      [Language.ZH_CN]: '掩护之盾II',
      [Language.JA]: 'カバーシールドII',
      [Language.EN]: 'Guardian II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Earth, 6],
      [Element.Mirage, 12],
    ]),
    baseShardSkillId: 50,
  },
  {
    id: 52,
    name_i18n: {
      [Language.ZH_CN]: '复仇之箭',
      [Language.JA]: 'リベンジアロー',
      [Language.EN]: 'Avenging Arrow',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Wind, 3],
      [Element.Time, 6],
    ]),
  },
  {
    id: 53,
    name_i18n: {
      [Language.ZH_CN]: '复仇之箭改',
      [Language.JA]: 'リベンジアロー改',
      [Language.EN]: 'リベンジアロー改',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Time, 12],
    ]),
    baseShardSkillId: 52,
  },
  {
    id: 54,
    name_i18n: {
      [Language.ZH_CN]: '炽天使之力',
      [Language.JA]: 'セラフィムフォース',
      [Language.EN]: 'Seraphic Force',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Water, 3],
      [Element.Space, 6],
    ]),
  },
  {
    id: 55,
    name_i18n: {
      [Language.ZH_CN]: '炽天使之力改',
      [Language.JA]: 'セラフィムフォース改',
      [Language.EN]: 'セラフィムフォース改',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Water, 6],
      [Element.Space, 12],
    ]),
    baseShardSkillId: 54,
  },
] as ShardSkill[]

export const DRIVE_LINE_SHARD_SKILLS = [
  {
    id: 56,
    name_i18n: {
      [Language.ZH_CN]: '大地增幅',
      [Language.JA]: 'アースブースト',
      [Language.EN]: 'Earth Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 57,
    name_i18n: {
      [Language.ZH_CN]: '水花增幅',
      [Language.JA]: 'アクアブースト',
      [Language.EN]: 'Aqua Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 58,
    name_i18n: {
      [Language.ZH_CN]: '火光增幅',
      [Language.JA]: 'フレアブースト',
      [Language.EN]: 'Flare Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 59,
    name_i18n: {
      [Language.ZH_CN]: '疾风增幅',
      [Language.JA]: 'ゲイルブースト',
      [Language.EN]: 'Gale Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 60,
    name_i18n: {
      [Language.ZH_CN]: '时光增幅',
      [Language.JA]: 'クロノブースト',
      [Language.EN]: 'Chrono Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 61,
    name_i18n: {
      [Language.ZH_CN]: '碧空增幅',
      [Language.JA]: 'ゴルトブースト',
      [Language.EN]: 'Cosmic Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 62,
    name_i18n: {
      [Language.ZH_CN]: '幻影增幅',
      [Language.JA]: 'カオスブースト',
      [Language.EN]: 'Chaos Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 63,
    name_i18n: {
      [Language.ZH_CN]: '大地增幅II',
      [Language.JA]: 'アースブーストII',
      [Language.EN]: 'Earth Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Earth, 8]]),
    baseShardSkillId: 56,
  },
  {
    id: 64,
    name_i18n: {
      [Language.ZH_CN]: '水花增幅II',
      [Language.JA]: 'アクアブーストII',
      [Language.EN]: 'Aqua Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Water, 8]]),
    baseShardSkillId: 57,
  },
  {
    id: 65,
    name_i18n: {
      [Language.ZH_CN]: '火光增幅II',
      [Language.JA]: 'フレアブーストII',
      [Language.EN]: 'Flare Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Fire, 8]]),
    baseShardSkillId: 58,
  },
  {
    id: 66,
    name_i18n: {
      [Language.ZH_CN]: '疾风增幅II',
      [Language.JA]: 'ゲイルブーストII',
      [Language.EN]: 'Gale Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Wind, 8]]),
    baseShardSkillId: 59,
  },
  {
    id: 67,
    name_i18n: {
      [Language.ZH_CN]: '时光增幅II',
      [Language.JA]: 'クロノブーストII',
      [Language.EN]: 'Chrono Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Time, 8]]),
    baseShardSkillId: 60,
  },
  {
    id: 68,
    name_i18n: {
      [Language.ZH_CN]: '碧空增幅II',
      [Language.JA]: 'ゴルトブーストII',
      [Language.EN]: 'Cosmic Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Space, 8]]),
    baseShardSkillId: 61,
  },
  {
    id: 69,
    name_i18n: {
      [Language.ZH_CN]: '幻影增幅II',
      [Language.JA]: 'カオスブーストII',
      [Language.EN]: 'Chaos Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Mirage, 8]]),
    baseShardSkillId: 62,
  },
  {
    id: 70,
    name_i18n: {
      [Language.ZH_CN]: '碎心者',
      [Language.JA]: 'マインドクラッカー',
      [Language.EN]: 'Mind Breaker',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Mirage, 3],
    ]),
  },
  {
    id: 71,
    name_i18n: {
      [Language.ZH_CN]: '碎心者改',
      [Language.JA]: 'マインドクラッカー改',
      [Language.EN]: 'マインドクラッカー改',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Wind, 10],
      [Element.Mirage, 5],
    ]),
    baseShardSkillId: 70,
  },
  {
    id: 72,
    name_i18n: {
      [Language.ZH_CN]: '碎魂者',
      [Language.JA]: 'スピリットクラッカー',
      [Language.EN]: 'Spirit Breaker',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Earth, 5],
      [Element.Space, 3],
    ]),
  },
  {
    id: 73,
    name_i18n: {
      [Language.ZH_CN]: '碎魂者改',
      [Language.JA]: 'スピリットクラッカー改',
      [Language.EN]: 'スピリットクラッカー改',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Earth, 10],
      [Element.Space, 5],
    ]),
    baseShardSkillId: 72,
  },
  {
    id: 74,
    name_i18n: {
      [Language.ZH_CN]: '破言突袭',
      [Language.JA]: '破言の強襲',
      [Language.EN]: 'Mind Breaker Barrage',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Fire, 5],
      [Element.Time, 3],
    ]),
  },
  {
    id: 75,
    name_i18n: {
      [Language.ZH_CN]: '超破言突袭',
      [Language.JA]: '破言の超強襲',
      [Language.EN]: '破言の超強襲',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Fire, 10],
      [Element.Time, 5],
    ]),
    baseShardSkillId: 74,
  },
  {
    id: 76,
    name_i18n: {
      [Language.ZH_CN]: '破灵突袭',
      [Language.JA]: '破霊の強襲',
      [Language.EN]: 'Spirit Breaker Barrage',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Water, 3],
      [Element.Time, 5],
    ]),
  },
  {
    id: 77,
    name_i18n: {
      [Language.ZH_CN]: '超破灵突袭',
      [Language.JA]: '破霊の超強襲',
      [Language.EN]: '破霊の超強襲',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Water, 5],
      [Element.Time, 10],
    ]),
    baseShardSkillId: 76,
  },
  {
    id: 78,
    name_i18n: {
      [Language.ZH_CN]: '神圣之羽',
      [Language.JA]: 'アークフェザー',
      [Language.EN]: 'Ark Feather',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Wind, 3],
      [Element.Mirage, 6],
    ]),
  },
  {
    id: 79,
    name_i18n: {
      [Language.ZH_CN]: '神圣之羽改',
      [Language.JA]: 'アークフェザー改',
      [Language.EN]: 'Judgment Feather',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Mirage, 12],
    ]),
    baseShardSkillId: 78,
  },
  {
    id: 80,
    name_i18n: {
      [Language.ZH_CN]: '奔流吸收',
      [Language.JA]: 'カタラクトゲイン',
      [Language.EN]: 'Absorbing Arts',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Earth, 3],
      [Element.Water, 6],
    ]),
  },
  {
    id: 81,
    name_i18n: {
      [Language.ZH_CN]: '奔流吸收II',
      [Language.JA]: 'カタラクトゲインII',
      [Language.EN]: 'Absorbing Arts II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Earth, 6],
      [Element.Water, 12],
    ]),
    baseShardSkillId: 80,
  },
  {
    id: 82,
    name_i18n: {
      [Language.ZH_CN]: '复仇咏唱',
      [Language.JA]: 'アベンジャースペル',
      [Language.EN]: 'Avenging Arts',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Fire, 3],
      [Element.Space, 6],
    ]),
  },
  {
    id: 83,
    name_i18n: {
      [Language.ZH_CN]: '复仇咏唱改',
      [Language.JA]: 'アベンジャースペル改',
      [Language.EN]: 'アベンジャースペル改',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Fire, 6],
      [Element.Space, 12],
    ]),
    baseShardSkillId: 82,
  },
] as ShardSkill[]

export const EXTRA_LINE_SHARD_SKILLS = [
  {
    id: 84,
    name_i18n: {
      [Language.ZH_CN]: '防御起手式',
      [Language.JA]: 'ガードスターター',
      [Language.EN]: 'Guarded Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Earth, 4]]),
  },
  {
    id: 85,
    name_i18n: {
      [Language.ZH_CN]: '能量起手式',
      [Language.JA]: 'エナジースターター',
      [Language.EN]: 'Healing Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Water, 4]]),
  },
  {
    id: 86,
    name_i18n: {
      [Language.ZH_CN]: '威力起手式',
      [Language.JA]: 'パワースターター',
      [Language.EN]: 'Powerful Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Fire, 4]]),
  },
  {
    id: 87,
    name_i18n: {
      [Language.ZH_CN]: '心眼起手式',
      [Language.JA]: 'ギフトスターター',
      [Language.EN]: 'Gifted Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Wind, 4]]),
  },
  {
    id: 88,
    name_i18n: {
      [Language.ZH_CN]: '快捷起手式',
      [Language.JA]: 'クイックスターター',
      [Language.EN]: 'Quick Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Time, 4]]),
  },
  {
    id: 89,
    name_i18n: {
      [Language.ZH_CN]: '魔力起手式',
      [Language.JA]: 'アーツスターター',
      [Language.EN]: 'Mystical Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Space, 4]]),
  },
  {
    id: 90,
    name_i18n: {
      [Language.ZH_CN]: '幻象起手式',
      [Language.JA]: 'ファントムスターター',
      [Language.EN]: 'Phantom Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Mirage, 4]]),
  },
  {
    id: 91,
    name_i18n: {
      [Language.ZH_CN]: '防御起手式II',
      [Language.JA]: 'ガードスターターII',
      [Language.EN]: 'Guarded Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Earth, 10]]),
    baseShardSkillId: 84,
  },
  {
    id: 92,
    name_i18n: {
      [Language.ZH_CN]: '能量起手式II',
      [Language.JA]: 'エナジースターターII',
      [Language.EN]: 'Healing Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Water, 10]]),
    baseShardSkillId: 85,
  },
  {
    id: 93,
    name_i18n: {
      [Language.ZH_CN]: '威力起手式II',
      [Language.JA]: 'パワースターターII',
      [Language.EN]: 'Powerful Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Fire, 10]]),
    baseShardSkillId: 86,
  },
  {
    id: 94,
    name_i18n: {
      [Language.ZH_CN]: '心眼起手式II',
      [Language.JA]: 'ギフトスターターII',
      [Language.EN]: 'Gifted Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Wind, 10]]),
    baseShardSkillId: 87,
  },
  {
    id: 95,
    name_i18n: {
      [Language.ZH_CN]: '快捷起手式II',
      [Language.JA]: 'クイックスターターII',
      [Language.EN]: 'Quick Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Time, 10]]),
    baseShardSkillId: 88,
  },
  {
    id: 96,
    name_i18n: {
      [Language.ZH_CN]: '魔力起手式II',
      [Language.JA]: 'アーツスターターII',
      [Language.EN]: 'Mystical Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Space, 10]]),
    baseShardSkillId: 89,
  },
  {
    id: 97,
    name_i18n: {
      [Language.ZH_CN]: '幻象起手式II',
      [Language.JA]: 'ファントムスターターII',
      [Language.EN]: 'Phantom Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Mirage, 10]]),
    baseShardSkillId: 90,
  },
  {
    id: 98,
    name_i18n: {
      [Language.ZH_CN]: '黄金眼',
      [Language.JA]: 'ゴールデンアイ',
      [Language.EN]: 'Golden Eye',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 99,
    name_i18n: {
      [Language.ZH_CN]: '破迅者',
      [Language.JA]: 'レッグブレイカー',
      [Language.EN]: 'Leg Breaker',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Mirage, 3],
    ]),
  },
  {
    id: 100,
    name_i18n: {
      [Language.ZH_CN]: '破迅者改',
      [Language.JA]: 'レッグブレイカー改',
      [Language.EN]: 'レッグブレイカー改',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Time, 10],
      [Element.Mirage, 6],
    ]),
    baseShardSkillId: 99,
  },
  {
    id: 101,
    name_i18n: {
      [Language.ZH_CN]: '破迅强袭',
      [Language.JA]: '破迅の強襲',
      [Language.EN]: 'Leg Breaker Barrage',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Time, 3],
      [Element.Space, 5],
    ]),
  },
  {
    id: 102,
    name_i18n: {
      [Language.ZH_CN]: '超破迅强袭',
      [Language.JA]: '破迅の超強襲',
      [Language.EN]: '破迅の超強襲',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Space, 10],
    ]),
    baseShardSkillId: 101,
  },
  {
    id: 103,
    name_i18n: {
      [Language.ZH_CN]: '自动强音之力',
      [Language.JA]: 'オートフォルテ',
      [Language.EN]: 'Auto Forte',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Fire, 4],
      [Element.Space, 4],
    ]),
  },
  {
    id: 104,
    name_i18n: {
      [Language.ZH_CN]: '自动结晶防护',
      [Language.JA]: 'オートクレスト',
      [Language.EN]: 'Auto Crest',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Earth, 4],
      [Element.Space, 4],
    ]),
  },
  {
    id: 105,
    name_i18n: {
      [Language.ZH_CN]: '自动快速',
      [Language.JA]: 'オートクイック',
      [Language.EN]: 'Auto Quick',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Time, 4],
      [Element.Space, 4],
    ]),
  },
  {
    id: 106,
    name_i18n: {
      [Language.ZH_CN]: '能量补给',
      [Language.JA]: 'エナジーチャージャー',
      [Language.EN]: 'Energy Charger',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Water, 6]]),
  },
  {
    id: 107,
    name_i18n: {
      [Language.ZH_CN]: '能量补给II',
      [Language.JA]: 'エナジーチャージャーII',
      [Language.EN]: 'Energy Charger II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Water, 12]]),
    baseShardSkillId: 106,
  },
  {
    id: 108,
    name_i18n: {
      [Language.ZH_CN]: '威力补给',
      [Language.JA]: 'パワーチャージャー',
      [Language.EN]: 'パワーチャージャー',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Fire, 6],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 109,
    name_i18n: {
      [Language.ZH_CN]: '威力补给II',
      [Language.JA]: 'パワーチャージャーII',
      [Language.EN]: 'パワーチャージャーII',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Fire, 12],
      [Element.Wind, 6],
    ]),
    baseShardSkillId: 108,
  },
  {
    id: 110,
    name_i18n: {
      [Language.ZH_CN]: 'S.C.L.M.扩增',
      [Language.JA]: 'スクラムアップ',
      [Language.EN]: 'SCLM Boost',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Earth, 3],
      [Element.Wind, 6],
    ]),
  },
  {
    id: 111,
    name_i18n: {
      [Language.ZH_CN]: 'S.C.L.M.扩增II',
      [Language.JA]: 'スクラムアップII',
      [Language.EN]: 'SCLM Boost II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Earth, 6],
      [Element.Wind, 12],
    ]),
    baseShardSkillId: 110,
  },
  {
    id: 112,
    name_i18n: {
      [Language.ZH_CN]: '危机之力',
      [Language.JA]: 'クライシスフォース',
      [Language.EN]: 'Crisis Force',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Earth, 6],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 113,
    name_i18n: {
      [Language.ZH_CN]: '危机之力II',
      [Language.JA]: 'クライシスフォースII',
      [Language.EN]: 'Crisis Force II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Earth, 12],
      [Element.Fire, 6],
    ]),
    baseShardSkillId: 112,
  },
  {
    id: 114,
    name_i18n: {
      [Language.ZH_CN]: '天界幸运',
      [Language.JA]: 'ヘブンリーラック',
      [Language.EN]: 'ヘブンリーラック',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Water, 3],
      [Element.Mirage, 6],
    ]),
  },
  {
    id: 115,
    name_i18n: {
      [Language.ZH_CN]: '天界幸运II',
      [Language.JA]: 'ヘブンリーラックII',
      [Language.EN]: 'ヘブンリーラックII',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Water, 6],
      [Element.Mirage, 12],
    ]),
    baseShardSkillId: 114,
  },
] as ShardSkill[]

export const ALL_SHARD_SKILLS = [
  ...WEAPON_LINE_SHARD_SKILLS,
  ...SHIELD_LINE_SHARD_SKILLS,
  ...DRIVE_LINE_SHARD_SKILLS,
  ...EXTRA_LINE_SHARD_SKILLS,
] as ShardSkill[]

export const ALL_SHARD_SKILLS_MAP = new Map<ShardSkillId, ShardSkill>(
  ALL_SHARD_SKILLS.map(shardSkill => [shardSkill.id, shardSkill]),
)
