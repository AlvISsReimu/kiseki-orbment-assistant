import { Element } from "./element.js";
import { QuartzLineType } from "./quartzLine.js";

export class ShardSkill {
  id: number;
  name_jp: string;
  lineType: QuartzLineType;
  elementalValues: Map<Element, number>;
}

export const getShardSkillById = (id: number): ShardSkill | null => {
  return ALL_SHARD_SKILLS_MAP.get(id) ?? null;
};

export const getShardSkillIdByNameJP = (name_jp: string): number | null => {
  for (let i = 0; i < ALL_SHARD_SKILLS.length; i++) {
    if (ALL_SHARD_SKILLS[i].name_jp === name_jp) {
      return i;
    }
  }
  return null;
};

export const WEAPON_LINE_SHARD_SKILLS = [
  {
    id: 0,
    name_jp: "アースインパクト",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 1,
    name_jp: "アクアインパクト",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 2,
    name_jp: "フレアインパクト",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 3,
    name_jp: "ゲイルインパクト",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 4,
    name_jp: "クロノインパクト",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 5,
    name_jp: "ゴルトインパクト",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 6,
    name_jp: "カオスインパクト",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 7,
    name_jp: "アースインパクトII",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Earth, 8]]),
  },
  {
    id: 8,
    name_jp: "アクアインパクトII",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Water, 8]]),
  },
  {
    id: 9,
    name_jp: "フレアインパクトII",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Fire, 8]]),
  },
  {
    id: 10,
    name_jp: "ゲイルインパクトII",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Wind, 8]]),
  },
  {
    id: 11,
    name_jp: "クロノインパクトII",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Time, 8]]),
  },
  {
    id: 12,
    name_jp: "ゴルトインパクトII",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Space, 8]]),
  },
  {
    id: 13,
    name_jp: "カオスインパクトII",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([[Element.Mirage, 8]]),
  },
  {
    id: 14,
    name_jp: "ソードブレイカー",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 15,
    name_jp: "ソードブレイカー改",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Space, 10],
      [Element.Fire, 5],
    ]),
  },
  {
    id: 16,
    name_jp: "シールドブレイカー",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Time, 3],
      [Element.Earth, 5],
    ]),
  },
  {
    id: 17,
    name_jp: "シールドブレイカー改",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Earth, 10],
    ]),
  },
  {
    id: 18,
    name_jp: "破剣の強襲",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Space, 3],
    ]),
  },
  {
    id: 19,
    name_jp: "破剣の超強襲",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Mirage, 10],
      [Element.Space, 5],
    ]),
  },
  {
    id: 20,
    name_jp: "破盾の強襲",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Wind, 3],
      [Element.Water, 5],
    ]),
  },
  {
    id: 21,
    name_jp: "破盾の超強襲",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Water, 10],
    ]),
  },
  {
    id: 22,
    name_jp: "フェイタルランサー",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Time, 10],
      [Element.Earth, 3],
    ]),
  },
  {
    id: 23,
    name_jp: "フェイタルランサー改",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Time, 12],
      [Element.Earth, 6],
    ]),
  },
  {
    id: 24,
    name_jp: "バーストゲイン",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Fire, 6],
      [Element.Water, 3],
    ]),
  },
  {
    id: 25,
    name_jp: "バーストゲインII",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Fire, 12],
      [Element.Water, 6],
    ]),
  },
  {
    id: 26,
    name_jp: "エクスキューショナー",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Mirage, 3],
      [Element.Wind, 6],
    ]),
  },
  {
    id: 27,
    name_jp: "エクスキューショナー改",
    lineType: QuartzLineType.Weapon,
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Wind, 12],
    ]),
  },
] as ShardSkill[];

export const SHIELD_LINE_SHARD_SKILLS = [
  {
    id: 28,
    name_jp: "アースレジスト",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 29,
    name_jp: "アクアレジスト",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 30,
    name_jp: "フレアレジスト",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 31,
    name_jp: "ゲイルレジスト",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 32,
    name_jp: "ダークレジスト",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 33,
    name_jp: "ゴルトレジスト",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 34,
    name_jp: "カオスレジスト",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 35,
    name_jp: "アースレジストII",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Earth, 8]]),
  },
  {
    id: 36,
    name_jp: "アクアレジストII",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Water, 8]]),
  },
  {
    id: 37,
    name_jp: "フレアレジストII",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Fire, 8]]),
  },
  {
    id: 38,
    name_jp: "ゲイルレジストII",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Wind, 8]]),
  },
  {
    id: 39,
    name_jp: "ダークレジストII",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Time, 8]]),
  },
  {
    id: 40,
    name_jp: "ゴルトレジストII",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Space, 8]]),
  },
  {
    id: 41,
    name_jp: "カオスレジストII",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([[Element.Mirage, 8]]),
  },
  {
    id: 42,
    name_jp: "リカバーガード",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Space, 2],
      [Element.Water, 4],
    ]),
  },
  {
    id: 43,
    name_jp: "Aリカバーガード",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Water, 10],
    ]),
  },
  {
    id: 44,
    name_jp: "ライズガード",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Wind, 2],
      [Element.Fire, 4],
    ]),
  },
  {
    id: 45,
    name_jp: "Aライズガード",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Fire, 10],
    ]),
  },
  {
    id: 46,
    name_jp: "フォルテガード",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Mirage, 2],
      [Element.Fire, 4],
    ]),
  },
  {
    id: 47,
    name_jp: "Aフォルテガード",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Fire, 10],
    ]),
  },
  {
    id: 48,
    name_jp: "クレストガード",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Time, 2],
      [Element.Earth, 4],
    ]),
  },
  {
    id: 49,
    name_jp: "Aクレストガード",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Earth, 10],
    ]),
  },
  {
    id: 50,
    name_jp: "カバーシールド",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Earth, 3],
    ]),
  },
  {
    id: 51,
    name_jp: "カバーシールドII",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Mirage, 12],
      [Element.Earth, 6],
    ]),
  },
  {
    id: 52,
    name_jp: "リベンジアロー",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Time, 6],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 53,
    name_jp: "リベンジアロー改",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Time, 12],
      [Element.Wind, 6],
    ]),
  },
  {
    id: 54,
    name_jp: "セラフィムフォース",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Space, 6],
      [Element.Water, 3],
    ]),
  },
  {
    id: 55,
    name_jp: "セラフィムフォース改",
    lineType: QuartzLineType.Shield,
    elementalValues: new Map([
      [Element.Space, 12],
      [Element.Water, 6],
    ]),
  },
] as ShardSkill[];

export const DRIVE_LINE_SHARD_SKILLS = [
  {
    id: 56,
    name_jp: "アースブースト",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 57,
    name_jp: "アクアブースト",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 58,
    name_jp: "フレアブースト",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 59,
    name_jp: "ゲイルブースト",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 60,
    name_jp: "クロノブースト",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 61,
    name_jp: "ゴルトブースト",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 62,
    name_jp: "カオスブースト",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 63,
    name_jp: "アースブーストII",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Earth, 8]]),
  },
  {
    id: 64,
    name_jp: "アクアブーストII",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Water, 8]]),
  },
  {
    id: 65,
    name_jp: "フレアブーストII",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Fire, 8]]),
  },
  {
    id: 66,
    name_jp: "ゲイルブーストII",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Wind, 8]]),
  },
  {
    id: 67,
    name_jp: "クロノブーストII",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Time, 8]]),
  },
  {
    id: 68,
    name_jp: "ゴルトブーストII",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Space, 8]]),
  },
  {
    id: 69,
    name_jp: "カオスブーストII",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([[Element.Mirage, 8]]),
  },
  {
    id: 70,
    name_jp: "マインドクラッカー",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Mirage, 3],
      [Element.Wind, 5],
    ]),
  },
  {
    id: 71,
    name_jp: "マインドクラッカー改",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Wind, 10],
    ]),
  },
  {
    id: 72,
    name_jp: "スピリットクラッカー",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Space, 3],
      [Element.Earth, 5],
    ]),
  },
  {
    id: 73,
    name_jp: "スピリットクラッカー改",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Earth, 10],
    ]),
  },
  {
    id: 74,
    name_jp: "破言の強襲",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 75,
    name_jp: "破言の超強襲",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Time, 10],
      [Element.Fire, 5],
    ]),
  },
  {
    id: 76,
    name_jp: "破霊の強襲",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Water, 3],
    ]),
  },
  {
    id: 77,
    name_jp: "破霊の超強襲",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Time, 10],
      [Element.Water, 5],
    ]),
  },
  {
    id: 78,
    name_jp: "アークフェザー",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Mirage, 10],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 79,
    name_jp: "アークフェザー改",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Mirage, 12],
      [Element.Wind, 6],
    ]),
  },
  {
    id: 80,
    name_jp: "カタラクトゲイン",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Water, 6],
      [Element.Earth, 3],
    ]),
  },
  {
    id: 81,
    name_jp: "カタラクトゲインII",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Water, 12],
      [Element.Earth, 6],
    ]),
  },
  {
    id: 82,
    name_jp: "アベンジャースペル",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Space, 6],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 83,
    name_jp: "アベンジャースペル改",
    lineType: QuartzLineType.Drive,
    elementalValues: new Map([
      [Element.Space, 12],
      [Element.Fire, 6],
    ]),
  },
] as ShardSkill[];

export const EXTRA_LINE_SHARD_SKILLS = [
  {
    id: 84,
    name_jp: "ガードスターター",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 85,
    name_jp: "エナジースターター",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 86,
    name_jp: "パワースターター",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 87,
    name_jp: "ギフトスターター",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 88,
    name_jp: "クイックスターター",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 89,
    name_jp: "アーツスターター",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 90,
    name_jp: "ファントムスターター",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 91,
    name_jp: "ガードスターターII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Earth, 10]]),
  },
  {
    id: 92,
    name_jp: "エナジースターターII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Water, 10]]),
  },
  {
    id: 93,
    name_jp: "パワースターターII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Fire, 10]]),
  },
  {
    id: 94,
    name_jp: "ギフトスターターII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Wind, 10]]),
  },
  {
    id: 95,
    name_jp: "クイックスターターII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Time, 10]]),
  },
  {
    id: 96,
    name_jp: "アーツスターターII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Space, 10]]),
  },
  {
    id: 97,
    name_jp: "ファントムスターターII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Mirage, 10]]),
  },
  {
    id: 98,
    name_jp: "ゴールデンアイ",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 99,
    name_jp: "レッグブレイカー",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Mirage, 3],
      [Element.Time, 5],
    ]),
  },
  {
    id: 100,
    name_jp: "レッグブレイカー改",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Time, 10],
    ]),
  },
  {
    id: 101,
    name_jp: "破迅の強襲",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Time, 3],
    ]),
  },
  {
    id: 102,
    name_jp: "破迅の超強襲",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Space, 10],
      [Element.Time, 6],
    ]),
  },
  {
    id: 103,
    name_jp: "オートフォルテ",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Space, 4],
      [Element.Fire, 4],
    ]),
  },
  {
    id: 104,
    name_jp: "オートクレスト",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Space, 4],
      [Element.Earth, 4],
    ]),
  },
  {
    id: 105,
    name_jp: "オートクイック",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Space, 4],
      [Element.Time, 4],
    ]),
  },
  {
    id: 106,
    name_jp: "エナジーチャージャー",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Water, 6]]),
  },
  {
    id: 107,
    name_jp: "エナジーチャージャーII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([[Element.Water, 12]]),
  },
  {
    id: 108,
    name_jp: "パワーチャージャー",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Wind, 3],
      [Element.Fire, 6],
    ]),
  },
  {
    id: 109,
    name_jp: "パワーチャージャーII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Fire, 12],
    ]),
  },
  {
    id: 110,
    name_jp: "スクラムアップ",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Earth, 3],
    ]),
  },
  {
    id: 111,
    name_jp: "スクラムアップII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Wind, 12],
      [Element.Earth, 6],
    ]),
  },
  {
    id: 112,
    name_jp: "クライシスフォース",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Fire, 3],
      [Element.Earth, 6],
    ]),
  },
  {
    id: 113,
    name_jp: "クライシスフォースII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Fire, 6],
      [Element.Earth, 12],
    ]),
  },
  {
    id: 114,
    name_jp: "ヘブンリーラック",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Water, 3],
    ]),
  },
  {
    id: 115,
    name_jp: "ヘブンリーラックII",
    lineType: QuartzLineType.Extra,
    elementalValues: new Map([
      [Element.Mirage, 12],
      [Element.Water, 6],
    ]),
  },
] as ShardSkill[];

export const ALL_SHARD_SKILLS = [
  ...WEAPON_LINE_SHARD_SKILLS,
  ...SHIELD_LINE_SHARD_SKILLS,
  ...DRIVE_LINE_SHARD_SKILLS,
  ...EXTRA_LINE_SHARD_SKILLS,
] as ShardSkill[];

export const ALL_SHARD_SKILLS_MAP = new Map<number, ShardSkill>(
  ALL_SHARD_SKILLS.map((shardSkill) => [shardSkill.id, shardSkill])
);
