import { ElementType } from '../enums/elementType.js'
import { LanguageCode } from '../enums/languageCode.js'
import { QuartzLineType } from '../enums/quartzLineType.js'
import type { ShardSkill, ShardSkillId } from '../model/shardSkill.js'

export const WEAPON_LINE_SHARD_SKILLS = [
  {
    id: 0,
    name_jp: 'アースインパクト',
    name_i18n: {
      [LanguageCode.ZH_CN]: '大地冲击',
      [LanguageCode.JA]: 'アースインパクト',
      [LanguageCode.EN]: 'Earth Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Earth, 2]]),
  },
  {
    id: 1,
    name_i18n: {
      [LanguageCode.ZH_CN]: '水花冲击',
      [LanguageCode.JA]: 'アクアインパクト',
      [LanguageCode.EN]: 'Aqua Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Water, 2]]),
  },
  {
    id: 2,
    name_i18n: {
      [LanguageCode.ZH_CN]: '火光冲击',
      [LanguageCode.JA]: 'フレアインパクト',
      [LanguageCode.EN]: 'Flare Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Fire, 2]]),
  },
  {
    id: 3,
    name_i18n: {
      [LanguageCode.ZH_CN]: '疾风冲击',
      [LanguageCode.JA]: 'ゲイルインパクト',
      [LanguageCode.EN]: 'Gale Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Wind, 2]]),
  },
  {
    id: 4,
    name_i18n: {
      [LanguageCode.ZH_CN]: '时光冲击',
      [LanguageCode.JA]: 'クロノインパクト',
      [LanguageCode.EN]: 'Chrono Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Time, 2]]),
  },
  {
    id: 5,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碧空冲击',
      [LanguageCode.JA]: 'ゴルトインパクト',
      [LanguageCode.EN]: 'Cosmic Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Space, 2]]),
  },
  {
    id: 6,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻影冲击',
      [LanguageCode.JA]: 'カオスインパクト',
      [LanguageCode.EN]: 'Chaos Impact',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Mirage, 2]]),
  },
  {
    id: 7,
    name_i18n: {
      [LanguageCode.ZH_CN]: '大地冲击II',
      [LanguageCode.JA]: 'アースインパクトII',
      [LanguageCode.EN]: 'Earth Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Earth, 8]]),
    baseShardSkillId: 0,
  },
  {
    id: 8,
    name_i18n: {
      [LanguageCode.ZH_CN]: '水花冲击II',
      [LanguageCode.JA]: 'アクアインパクトII',
      [LanguageCode.EN]: 'Aqua Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Water, 8]]),
    baseShardSkillId: 1,
  },
  {
    id: 9,
    name_i18n: {
      [LanguageCode.ZH_CN]: '火光冲击II',
      [LanguageCode.JA]: 'フレアインパクトII',
      [LanguageCode.EN]: 'Flare Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Fire, 8]]),
    baseShardSkillId: 2,
  },
  {
    id: 10,
    name_i18n: {
      [LanguageCode.ZH_CN]: '疾风冲击II',
      [LanguageCode.JA]: 'ゲイルインパクトII',
      [LanguageCode.EN]: 'Gale Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Wind, 8]]),
    baseShardSkillId: 3,
  },
  {
    id: 11,
    name_i18n: {
      [LanguageCode.ZH_CN]: '时光冲击II',
      [LanguageCode.JA]: 'クロノインパクトII',
      [LanguageCode.EN]: 'Chrono Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Time, 8]]),
    baseShardSkillId: 4,
  },
  {
    id: 12,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碧空冲击II',
      [LanguageCode.JA]: 'ゴルトインパクトII',
      [LanguageCode.EN]: 'Cosmic Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Space, 8]]),
    baseShardSkillId: 5,
  },
  {
    id: 13,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻影冲击II',
      [LanguageCode.JA]: 'カオスインパクトII',
      [LanguageCode.EN]: 'Chaos Impact II',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[ElementType.Mirage, 8]]),
    baseShardSkillId: 6,
  },
  {
    id: 14,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破剑者',
      [LanguageCode.JA]: 'ソードブレイカー',
      [LanguageCode.EN]: 'Sword Breaker',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Fire, 3],
      [ElementType.Space, 5],
    ]),
  },
  {
    id: 15,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破剑者改',
      [LanguageCode.JA]: 'ソードブレイカー改',
      [LanguageCode.EN]: 'ソードブレイカー改',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Fire, 5],
      [ElementType.Space, 10],
    ]),
    baseShardSkillId: 14,
  },
  {
    id: 16,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破盾者',
      [LanguageCode.JA]: 'シールドブレイカー',
      [LanguageCode.EN]: 'Shield Breaker',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Earth, 5],
      [ElementType.Time, 3],
    ]),
  },
  {
    id: 17,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破盾者改',
      [LanguageCode.JA]: 'シールドブレイカー改',
      [LanguageCode.EN]: 'シールドブレイカー改',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Earth, 10],
      [ElementType.Time, 5],
    ]),
    baseShardSkillId: 16,
  },
  {
    id: 18,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破剑突袭',
      [LanguageCode.JA]: '破剣の強襲',
      [LanguageCode.EN]: 'Sword Breaker Barrage',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Space, 3],
      [ElementType.Mirage, 5],
    ]),
  },
  {
    id: 19,
    name_i18n: {
      [LanguageCode.ZH_CN]: '超破剑突袭',
      [LanguageCode.JA]: '破剣の超強襲',
      [LanguageCode.EN]: '破剣の超強襲',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Space, 5],
      [ElementType.Mirage, 10],
    ]),
    baseShardSkillId: 18,
  },
  {
    id: 20,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破盾突袭',
      [LanguageCode.JA]: '破盾の強襲',
      [LanguageCode.EN]: 'Shield Breaker Barrage',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Water, 5],
      [ElementType.Wind, 3],
    ]),
  },
  {
    id: 21,
    name_i18n: {
      [LanguageCode.ZH_CN]: '超破盾突袭',
      [LanguageCode.JA]: '破盾の超強襲',
      [LanguageCode.EN]: '破盾の超強襲',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Water, 10],
      [ElementType.Wind, 5],
    ]),
    baseShardSkillId: 20,
  },
  {
    id: 22,
    name_i18n: {
      [LanguageCode.ZH_CN]: '致命追击',
      [LanguageCode.JA]: 'フェイタルランサー',
      [LanguageCode.EN]: 'Fatal Lance',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Earth, 3],
      [ElementType.Time, 6],
    ]),
  },
  {
    id: 23,
    name_i18n: {
      [LanguageCode.ZH_CN]: '致命追击改',
      [LanguageCode.JA]: 'フェイタルランサー改',
      [LanguageCode.EN]: 'Deadly Lance',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Earth, 6],
      [ElementType.Time, 12],
    ]),
    baseShardSkillId: 22,
  },
  {
    id: 24,
    name_i18n: {
      [LanguageCode.ZH_CN]: '爆裂吸收',
      [LanguageCode.JA]: 'バーストゲイン',
      [LanguageCode.EN]: 'Burst Gain',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Water, 3],
      [ElementType.Fire, 6],
    ]),
  },
  {
    id: 25,
    name_i18n: {
      [LanguageCode.ZH_CN]: '爆裂吸收II',
      [LanguageCode.JA]: 'バーストゲインII',
      [LanguageCode.EN]: 'バーストゲインII',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Water, 6],
      [ElementType.Fire, 12],
    ]),
    baseShardSkillId: 24,
  },
  {
    id: 26,
    name_i18n: {
      [LanguageCode.ZH_CN]: '处刑者',
      [LanguageCode.JA]: 'エクスキューショナー',
      [LanguageCode.EN]: 'Executioner',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Wind, 6],
      [ElementType.Mirage, 3],
    ]),
  },
  {
    id: 27,
    name_i18n: {
      [LanguageCode.ZH_CN]: '处刑者改',
      [LanguageCode.JA]: 'エクスキューショナー改',
      [LanguageCode.EN]: 'エクスキューショナー改',
    },
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [ElementType.Wind, 12],
      [ElementType.Mirage, 6],
    ]),
    baseShardSkillId: 26,
  },
] as ShardSkill[]

export const SHIELD_LINE_SHARD_SKILLS = [
  {
    id: 28,
    name_i18n: {
      [LanguageCode.ZH_CN]: '大地抗性',
      [LanguageCode.JA]: 'アースレジスト',
      [LanguageCode.EN]: 'Resist Rot',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Earth, 2]]),
  },
  {
    id: 29,
    name_i18n: {
      [LanguageCode.ZH_CN]: '水花抗性',
      [LanguageCode.JA]: 'アクアレジスト',
      [LanguageCode.EN]: 'Resist Freeze',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Water, 2]]),
  },
  {
    id: 30,
    name_i18n: {
      [LanguageCode.ZH_CN]: '火光抗性',
      [LanguageCode.JA]: 'フレアレジスト',
      [LanguageCode.EN]: 'Resist Burn',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Fire, 2]]),
  },
  {
    id: 31,
    name_i18n: {
      [LanguageCode.ZH_CN]: '疾风抗性',
      [LanguageCode.JA]: 'ゲイルレジスト',
      [LanguageCode.EN]: 'Resist Seal',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Wind, 2]]),
  },
  {
    id: 32,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黑暗抗性',
      [LanguageCode.JA]: 'ダークレジスト',
      [LanguageCode.EN]: 'Resist Blind',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Time, 2]]),
  },
  {
    id: 33,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碧空抗性',
      [LanguageCode.JA]: 'ゴルトレジスト',
      [LanguageCode.EN]: 'Resist Mute',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Space, 2]]),
  },
  {
    id: 34,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻影抗性',
      [LanguageCode.JA]: 'カオスレジスト',
      [LanguageCode.EN]: 'Resist Fear',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Mirage, 2]]),
  },
  {
    id: 35,
    name_i18n: {
      [LanguageCode.ZH_CN]: '大地抗性II',
      [LanguageCode.JA]: 'アースレジストII',
      [LanguageCode.EN]: 'Resist Rot II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Earth, 8]]),
    baseShardSkillId: 28,
  },
  {
    id: 36,
    name_i18n: {
      [LanguageCode.ZH_CN]: '水花抗性II',
      [LanguageCode.JA]: 'アクアレジストII',
      [LanguageCode.EN]: 'Resist Freeze II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Water, 8]]),
    baseShardSkillId: 29,
  },
  {
    id: 37,
    name_i18n: {
      [LanguageCode.ZH_CN]: '火光抗性II',
      [LanguageCode.JA]: 'フレアレジストII',
      [LanguageCode.EN]: 'Resist Burn II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Fire, 8]]),
    baseShardSkillId: 30,
  },
  {
    id: 38,
    name_i18n: {
      [LanguageCode.ZH_CN]: '疾风抗性II',
      [LanguageCode.JA]: 'ゲイルレジストII',
      [LanguageCode.EN]: 'Resist Seal II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Wind, 8]]),
    baseShardSkillId: 31,
  },
  {
    id: 39,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黑暗抗性II',
      [LanguageCode.JA]: 'ダークレジストII',
      [LanguageCode.EN]: 'Resist Blind II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Time, 8]]),
    baseShardSkillId: 32,
  },
  {
    id: 40,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碧空抗性II',
      [LanguageCode.JA]: 'ゴルトレジストII',
      [LanguageCode.EN]: 'Resist Mute II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Space, 8]]),
    baseShardSkillId: 33,
  },
  {
    id: 41,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻影抗性II',
      [LanguageCode.JA]: 'カオスレジストII',
      [LanguageCode.EN]: 'Resist Fear II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[ElementType.Mirage, 8]]),
    baseShardSkillId: 34,
  },
  {
    id: 42,
    name_i18n: {
      [LanguageCode.ZH_CN]: '治疗防御',
      [LanguageCode.JA]: 'リカバーガード',
      [LanguageCode.EN]: 'Regen Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Water, 4],
      [ElementType.Space, 2],
    ]),
  },
  {
    id: 43,
    name_i18n: {
      [LanguageCode.ZH_CN]: '自动治疗防御',
      [LanguageCode.JA]: 'Aリカバーガード',
      [LanguageCode.EN]: 'Auto Regen Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Water, 10],
      [ElementType.Space, 5],
    ]),
    baseShardSkillId: 42,
  },
  {
    id: 44,
    name_i18n: {
      [LanguageCode.ZH_CN]: '充能防御',
      [LanguageCode.JA]: 'ライズガード',
      [LanguageCode.EN]: 'Impassion Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Fire, 2],
      [ElementType.Wind, 4],
    ]),
  },
  {
    id: 45,
    name_i18n: {
      [LanguageCode.ZH_CN]: '自动充能防御',
      [LanguageCode.JA]: 'Aライズガード',
      [LanguageCode.EN]: 'Auto Impassion Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Fire, 5],
      [ElementType.Wind, 10],
    ]),
    baseShardSkillId: 44,
  },
  {
    id: 46,
    name_i18n: {
      [LanguageCode.ZH_CN]: '强攻防御',
      [LanguageCode.JA]: 'フォルテガード',
      [LanguageCode.EN]: 'Forte Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Fire, 4],
      [ElementType.Mirage, 2],
    ]),
  },
  {
    id: 47,
    name_i18n: {
      [LanguageCode.ZH_CN]: '自动强攻防御',
      [LanguageCode.JA]: 'Aフォルテガード',
      [LanguageCode.EN]: 'Auto Forte Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Fire, 10],
      [ElementType.Mirage, 5],
    ]),
    baseShardSkillId: 46,
  },
  {
    id: 48,
    name_i18n: {
      [LanguageCode.ZH_CN]: '结晶防御',
      [LanguageCode.JA]: 'クレストガード',
      [LanguageCode.EN]: 'Crest Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Earth, 2],
      [ElementType.Time, 1],
    ]),
  },
  {
    id: 49,
    name_i18n: {
      [LanguageCode.ZH_CN]: '自动结晶防御',
      [LanguageCode.JA]: 'Aクレストガード',
      [LanguageCode.EN]: 'Auto Crest Guard',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Earth, 10],
      [ElementType.Time, 5],
    ]),
    baseShardSkillId: 48,
  },
  {
    id: 50,
    name_i18n: {
      [LanguageCode.ZH_CN]: '掩护之盾',
      [LanguageCode.JA]: 'カバーシールド',
      [LanguageCode.EN]: 'Guardian',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Earth, 3],
      [ElementType.Mirage, 6],
    ]),
  },
  {
    id: 51,
    name_i18n: {
      [LanguageCode.ZH_CN]: '掩护之盾II',
      [LanguageCode.JA]: 'カバーシールドII',
      [LanguageCode.EN]: 'Guardian II',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Earth, 6],
      [ElementType.Mirage, 12],
    ]),
    baseShardSkillId: 50,
  },
  {
    id: 52,
    name_i18n: {
      [LanguageCode.ZH_CN]: '复仇之箭',
      [LanguageCode.JA]: 'リベンジアロー',
      [LanguageCode.EN]: 'Avenging Arrow',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Wind, 3],
      [ElementType.Time, 6],
    ]),
  },
  {
    id: 53,
    name_i18n: {
      [LanguageCode.ZH_CN]: '复仇之箭改',
      [LanguageCode.JA]: 'リベンジアロー改',
      [LanguageCode.EN]: 'リベンジアロー改',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Wind, 6],
      [ElementType.Time, 12],
    ]),
    baseShardSkillId: 52,
  },
  {
    id: 54,
    name_i18n: {
      [LanguageCode.ZH_CN]: '炽天使之力',
      [LanguageCode.JA]: 'セラフィムフォース',
      [LanguageCode.EN]: 'Seraphic Force',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Water, 3],
      [ElementType.Space, 6],
    ]),
  },
  {
    id: 55,
    name_i18n: {
      [LanguageCode.ZH_CN]: '炽天使之力改',
      [LanguageCode.JA]: 'セラフィムフォース改',
      [LanguageCode.EN]: 'セラフィムフォース改',
    },
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [ElementType.Water, 6],
      [ElementType.Space, 12],
    ]),
    baseShardSkillId: 54,
  },
] as ShardSkill[]

export const DRIVE_LINE_SHARD_SKILLS = [
  {
    id: 56,
    name_i18n: {
      [LanguageCode.ZH_CN]: '大地增幅',
      [LanguageCode.JA]: 'アースブースト',
      [LanguageCode.EN]: 'Earth Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Earth, 2]]),
  },
  {
    id: 57,
    name_i18n: {
      [LanguageCode.ZH_CN]: '水花增幅',
      [LanguageCode.JA]: 'アクアブースト',
      [LanguageCode.EN]: 'Aqua Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Water, 2]]),
  },
  {
    id: 58,
    name_i18n: {
      [LanguageCode.ZH_CN]: '火光增幅',
      [LanguageCode.JA]: 'フレアブースト',
      [LanguageCode.EN]: 'Flare Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Fire, 2]]),
  },
  {
    id: 59,
    name_i18n: {
      [LanguageCode.ZH_CN]: '疾风增幅',
      [LanguageCode.JA]: 'ゲイルブースト',
      [LanguageCode.EN]: 'Gale Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Wind, 2]]),
  },
  {
    id: 60,
    name_i18n: {
      [LanguageCode.ZH_CN]: '时光增幅',
      [LanguageCode.JA]: 'クロノブースト',
      [LanguageCode.EN]: 'Chrono Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Time, 2]]),
  },
  {
    id: 61,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碧空增幅',
      [LanguageCode.JA]: 'ゴルトブースト',
      [LanguageCode.EN]: 'Cosmic Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Space, 2]]),
  },
  {
    id: 62,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻影增幅',
      [LanguageCode.JA]: 'カオスブースト',
      [LanguageCode.EN]: 'Chaos Boost',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Mirage, 2]]),
  },
  {
    id: 63,
    name_i18n: {
      [LanguageCode.ZH_CN]: '大地增幅II',
      [LanguageCode.JA]: 'アースブーストII',
      [LanguageCode.EN]: 'Earth Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Earth, 8]]),
    baseShardSkillId: 56,
  },
  {
    id: 64,
    name_i18n: {
      [LanguageCode.ZH_CN]: '水花增幅II',
      [LanguageCode.JA]: 'アクアブーストII',
      [LanguageCode.EN]: 'Aqua Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Water, 8]]),
    baseShardSkillId: 57,
  },
  {
    id: 65,
    name_i18n: {
      [LanguageCode.ZH_CN]: '火光增幅II',
      [LanguageCode.JA]: 'フレアブーストII',
      [LanguageCode.EN]: 'Flare Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Fire, 8]]),
    baseShardSkillId: 58,
  },
  {
    id: 66,
    name_i18n: {
      [LanguageCode.ZH_CN]: '疾风增幅II',
      [LanguageCode.JA]: 'ゲイルブーストII',
      [LanguageCode.EN]: 'Gale Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Wind, 8]]),
    baseShardSkillId: 59,
  },
  {
    id: 67,
    name_i18n: {
      [LanguageCode.ZH_CN]: '时光增幅II',
      [LanguageCode.JA]: 'クロノブーストII',
      [LanguageCode.EN]: 'Chrono Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Time, 8]]),
    baseShardSkillId: 60,
  },
  {
    id: 68,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碧空增幅II',
      [LanguageCode.JA]: 'ゴルトブーストII',
      [LanguageCode.EN]: 'Cosmic Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Space, 8]]),
    baseShardSkillId: 61,
  },
  {
    id: 69,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻影增幅II',
      [LanguageCode.JA]: 'カオスブーストII',
      [LanguageCode.EN]: 'Chaos Boost II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[ElementType.Mirage, 8]]),
    baseShardSkillId: 62,
  },
  {
    id: 70,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碎心者',
      [LanguageCode.JA]: 'マインドクラッカー',
      [LanguageCode.EN]: 'Mind Breaker',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Wind, 5],
      [ElementType.Mirage, 3],
    ]),
  },
  {
    id: 71,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碎心者改',
      [LanguageCode.JA]: 'マインドクラッカー改',
      [LanguageCode.EN]: 'マインドクラッカー改',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Wind, 10],
      [ElementType.Mirage, 5],
    ]),
    baseShardSkillId: 70,
  },
  {
    id: 72,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碎魂者',
      [LanguageCode.JA]: 'スピリットクラッカー',
      [LanguageCode.EN]: 'Spirit Breaker',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Earth, 5],
      [ElementType.Space, 3],
    ]),
  },
  {
    id: 73,
    name_i18n: {
      [LanguageCode.ZH_CN]: '碎魂者改',
      [LanguageCode.JA]: 'スピリットクラッカー改',
      [LanguageCode.EN]: 'スピリットクラッカー改',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Earth, 10],
      [ElementType.Space, 5],
    ]),
    baseShardSkillId: 72,
  },
  {
    id: 74,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破言突袭',
      [LanguageCode.JA]: '破言の強襲',
      [LanguageCode.EN]: 'Mind Breaker Barrage',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Fire, 5],
      [ElementType.Time, 3],
    ]),
  },
  {
    id: 75,
    name_i18n: {
      [LanguageCode.ZH_CN]: '超破言突袭',
      [LanguageCode.JA]: '破言の超強襲',
      [LanguageCode.EN]: '破言の超強襲',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Fire, 10],
      [ElementType.Time, 5],
    ]),
    baseShardSkillId: 74,
  },
  {
    id: 76,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破灵突袭',
      [LanguageCode.JA]: '破霊の強襲',
      [LanguageCode.EN]: 'Spirit Breaker Barrage',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Water, 3],
      [ElementType.Time, 5],
    ]),
  },
  {
    id: 77,
    name_i18n: {
      [LanguageCode.ZH_CN]: '超破灵突袭',
      [LanguageCode.JA]: '破霊の超強襲',
      [LanguageCode.EN]: '破霊の超強襲',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Water, 5],
      [ElementType.Time, 10],
    ]),
    baseShardSkillId: 76,
  },
  {
    id: 78,
    name_i18n: {
      [LanguageCode.ZH_CN]: '神圣之羽',
      [LanguageCode.JA]: 'アークフェザー',
      [LanguageCode.EN]: 'Ark Feather',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Wind, 3],
      [ElementType.Mirage, 6],
    ]),
  },
  {
    id: 79,
    name_i18n: {
      [LanguageCode.ZH_CN]: '神圣之羽改',
      [LanguageCode.JA]: 'アークフェザー改',
      [LanguageCode.EN]: 'Judgment Feather',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Wind, 6],
      [ElementType.Mirage, 12],
    ]),
    baseShardSkillId: 78,
  },
  {
    id: 80,
    name_i18n: {
      [LanguageCode.ZH_CN]: '奔流吸收',
      [LanguageCode.JA]: 'カタラクトゲイン',
      [LanguageCode.EN]: 'Absorbing Arts',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Earth, 3],
      [ElementType.Water, 6],
    ]),
  },
  {
    id: 81,
    name_i18n: {
      [LanguageCode.ZH_CN]: '奔流吸收II',
      [LanguageCode.JA]: 'カタラクトゲインII',
      [LanguageCode.EN]: 'Absorbing Arts II',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Earth, 6],
      [ElementType.Water, 12],
    ]),
    baseShardSkillId: 80,
  },
  {
    id: 82,
    name_i18n: {
      [LanguageCode.ZH_CN]: '复仇咏唱',
      [LanguageCode.JA]: 'アベンジャースペル',
      [LanguageCode.EN]: 'Avenging Arts',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Fire, 3],
      [ElementType.Space, 6],
    ]),
  },
  {
    id: 83,
    name_i18n: {
      [LanguageCode.ZH_CN]: '复仇咏唱改',
      [LanguageCode.JA]: 'アベンジャースペル改',
      [LanguageCode.EN]: 'アベンジャースペル改',
    },
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [ElementType.Fire, 6],
      [ElementType.Space, 12],
    ]),
    baseShardSkillId: 82,
  },
] as ShardSkill[]

export const EXTRA_LINE_SHARD_SKILLS = [
  {
    id: 84,
    name_i18n: {
      [LanguageCode.ZH_CN]: '防御起手式',
      [LanguageCode.JA]: 'ガードスターター',
      [LanguageCode.EN]: 'Guarded Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Earth, 4]]),
  },
  {
    id: 85,
    name_i18n: {
      [LanguageCode.ZH_CN]: '能量起手式',
      [LanguageCode.JA]: 'エナジースターター',
      [LanguageCode.EN]: 'Healing Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Water, 4]]),
  },
  {
    id: 86,
    name_i18n: {
      [LanguageCode.ZH_CN]: '威力起手式',
      [LanguageCode.JA]: 'パワースターター',
      [LanguageCode.EN]: 'Powerful Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Fire, 4]]),
  },
  {
    id: 87,
    name_i18n: {
      [LanguageCode.ZH_CN]: '心眼起手式',
      [LanguageCode.JA]: 'ギフトスターター',
      [LanguageCode.EN]: 'Gifted Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Wind, 4]]),
  },
  {
    id: 88,
    name_i18n: {
      [LanguageCode.ZH_CN]: '快捷起手式',
      [LanguageCode.JA]: 'クイックスターター',
      [LanguageCode.EN]: 'Quick Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Time, 4]]),
  },
  {
    id: 89,
    name_i18n: {
      [LanguageCode.ZH_CN]: '魔力起手式',
      [LanguageCode.JA]: 'アーツスターター',
      [LanguageCode.EN]: 'Mystical Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Space, 4]]),
  },
  {
    id: 90,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻象起手式',
      [LanguageCode.JA]: 'ファントムスターター',
      [LanguageCode.EN]: 'Phantom Start',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Mirage, 4]]),
  },
  {
    id: 91,
    name_i18n: {
      [LanguageCode.ZH_CN]: '防御起手式II',
      [LanguageCode.JA]: 'ガードスターターII',
      [LanguageCode.EN]: 'Guarded Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Earth, 10]]),
    baseShardSkillId: 84,
  },
  {
    id: 92,
    name_i18n: {
      [LanguageCode.ZH_CN]: '能量起手式II',
      [LanguageCode.JA]: 'エナジースターターII',
      [LanguageCode.EN]: 'Healing Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Water, 10]]),
    baseShardSkillId: 85,
  },
  {
    id: 93,
    name_i18n: {
      [LanguageCode.ZH_CN]: '威力起手式II',
      [LanguageCode.JA]: 'パワースターターII',
      [LanguageCode.EN]: 'Powerful Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Fire, 10]]),
    baseShardSkillId: 86,
  },
  {
    id: 94,
    name_i18n: {
      [LanguageCode.ZH_CN]: '心眼起手式II',
      [LanguageCode.JA]: 'ギフトスターターII',
      [LanguageCode.EN]: 'Gifted Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Wind, 10]]),
    baseShardSkillId: 87,
  },
  {
    id: 95,
    name_i18n: {
      [LanguageCode.ZH_CN]: '快捷起手式II',
      [LanguageCode.JA]: 'クイックスターターII',
      [LanguageCode.EN]: 'Quick Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Time, 10]]),
    baseShardSkillId: 88,
  },
  {
    id: 96,
    name_i18n: {
      [LanguageCode.ZH_CN]: '魔力起手式II',
      [LanguageCode.JA]: 'アーツスターターII',
      [LanguageCode.EN]: 'Mystical Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Space, 10]]),
    baseShardSkillId: 89,
  },
  {
    id: 97,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻象起手式II',
      [LanguageCode.JA]: 'ファントムスターターII',
      [LanguageCode.EN]: 'Phantom Start II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Mirage, 10]]),
    baseShardSkillId: 90,
  },
  {
    id: 98,
    name_i18n: {
      [LanguageCode.ZH_CN]: '黄金眼',
      [LanguageCode.JA]: 'ゴールデンアイ',
      [LanguageCode.EN]: 'Golden Eye',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Mirage, 2]]),
  },
  {
    id: 99,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破迅者',
      [LanguageCode.JA]: 'レッグブレイカー',
      [LanguageCode.EN]: 'Leg Breaker',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Time, 5],
      [ElementType.Mirage, 3],
    ]),
  },
  {
    id: 100,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破迅者改',
      [LanguageCode.JA]: 'レッグブレイカー改',
      [LanguageCode.EN]: 'レッグブレイカー改',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Time, 10],
      [ElementType.Mirage, 6],
    ]),
    baseShardSkillId: 99,
  },
  {
    id: 101,
    name_i18n: {
      [LanguageCode.ZH_CN]: '破迅强袭',
      [LanguageCode.JA]: '破迅の強襲',
      [LanguageCode.EN]: 'Leg Breaker Barrage',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Time, 3],
      [ElementType.Space, 5],
    ]),
  },
  {
    id: 102,
    name_i18n: {
      [LanguageCode.ZH_CN]: '超破迅强袭',
      [LanguageCode.JA]: '破迅の超強襲',
      [LanguageCode.EN]: '破迅の超強襲',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Time, 5],
      [ElementType.Space, 10],
    ]),
    baseShardSkillId: 101,
  },
  {
    id: 103,
    name_i18n: {
      [LanguageCode.ZH_CN]: '自动强音之力',
      [LanguageCode.JA]: 'オートフォルテ',
      [LanguageCode.EN]: 'Auto Forte',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Fire, 4],
      [ElementType.Space, 4],
    ]),
  },
  {
    id: 104,
    name_i18n: {
      [LanguageCode.ZH_CN]: '自动结晶防护',
      [LanguageCode.JA]: 'オートクレスト',
      [LanguageCode.EN]: 'Auto Crest',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Earth, 4],
      [ElementType.Space, 4],
    ]),
  },
  {
    id: 105,
    name_i18n: {
      [LanguageCode.ZH_CN]: '自动快速',
      [LanguageCode.JA]: 'オートクイック',
      [LanguageCode.EN]: 'Auto Quick',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Time, 4],
      [ElementType.Space, 4],
    ]),
  },
  {
    id: 106,
    name_i18n: {
      [LanguageCode.ZH_CN]: '能量补给',
      [LanguageCode.JA]: 'エナジーチャージャー',
      [LanguageCode.EN]: 'Energy Charger',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Water, 6]]),
  },
  {
    id: 107,
    name_i18n: {
      [LanguageCode.ZH_CN]: '能量补给II',
      [LanguageCode.JA]: 'エナジーチャージャーII',
      [LanguageCode.EN]: 'Energy Charger II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[ElementType.Water, 12]]),
    baseShardSkillId: 106,
  },
  {
    id: 108,
    name_i18n: {
      [LanguageCode.ZH_CN]: '威力补给',
      [LanguageCode.JA]: 'パワーチャージャー',
      [LanguageCode.EN]: 'パワーチャージャー',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Fire, 6],
      [ElementType.Wind, 3],
    ]),
  },
  {
    id: 109,
    name_i18n: {
      [LanguageCode.ZH_CN]: '威力补给II',
      [LanguageCode.JA]: 'パワーチャージャーII',
      [LanguageCode.EN]: 'パワーチャージャーII',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Fire, 12],
      [ElementType.Wind, 6],
    ]),
    baseShardSkillId: 108,
  },
  {
    id: 110,
    name_i18n: {
      [LanguageCode.ZH_CN]: 'S.C.L.M.扩增',
      [LanguageCode.JA]: 'スクラムアップ',
      [LanguageCode.EN]: 'SCLM Boost',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Earth, 3],
      [ElementType.Wind, 6],
    ]),
  },
  {
    id: 111,
    name_i18n: {
      [LanguageCode.ZH_CN]: 'S.C.L.M.扩增II',
      [LanguageCode.JA]: 'スクラムアップII',
      [LanguageCode.EN]: 'SCLM Boost II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Earth, 6],
      [ElementType.Wind, 12],
    ]),
    baseShardSkillId: 110,
  },
  {
    id: 112,
    name_i18n: {
      [LanguageCode.ZH_CN]: '危机之力',
      [LanguageCode.JA]: 'クライシスフォース',
      [LanguageCode.EN]: 'Crisis Force',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Earth, 6],
      [ElementType.Fire, 3],
    ]),
  },
  {
    id: 113,
    name_i18n: {
      [LanguageCode.ZH_CN]: '危机之力II',
      [LanguageCode.JA]: 'クライシスフォースII',
      [LanguageCode.EN]: 'Crisis Force II',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Earth, 12],
      [ElementType.Fire, 6],
    ]),
    baseShardSkillId: 112,
  },
  {
    id: 114,
    name_i18n: {
      [LanguageCode.ZH_CN]: '天界幸运',
      [LanguageCode.JA]: 'ヘブンリーラック',
      [LanguageCode.EN]: 'ヘブンリーラック',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Water, 3],
      [ElementType.Mirage, 6],
    ]),
  },
  {
    id: 115,
    name_i18n: {
      [LanguageCode.ZH_CN]: '天界幸运II',
      [LanguageCode.JA]: 'ヘブンリーラックII',
      [LanguageCode.EN]: 'ヘブンリーラックII',
    },
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [ElementType.Water, 6],
      [ElementType.Mirage, 12],
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
