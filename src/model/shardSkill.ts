import { Element } from "./element.js";
import { QuartzLineType } from "./quartzLine.js";

export class ShardSkill {
  id: number;
  name_jp: string;
  lineType: QuartzLineType;
  elementalValues: Map<Element, number>;
}

export const getShardSkillById = (id: number): ShardSkill | null => {
  if (id < 0 || id >= ALL_SHARD_SKILLS.length) {
    return null;
  }
  const shardSkill = ALL_SHARD_SKILLS[id];
  shardSkill.id = id;
  shardSkill.lineType = _getShardSkillLineType(id);
  return shardSkill;
};

export const getShardSkillIdByNameJP = (name_jp: string): number | null => {
  for (let i = 0; i < ALL_SHARD_SKILLS.length; i++) {
    if (ALL_SHARD_SKILLS[i].name_jp === name_jp) {
      return i;
    }
  }
  return null;
};

const _getShardSkillLineType = (id: number): QuartzLineType | null => {
  switch (Math.floor(id / 28)) {
    case 0:
      return QuartzLineType.Weapon;
    case 1:
      return QuartzLineType.Shield;
    case 2:
      return QuartzLineType.Drive;
    case 3:
      return QuartzLineType.Extra;
    default:
      return null;
  }
};

// id 0 to 27
export const WEAPON_LINE_SHARD_SKILLS = [
  {
    name_jp: "アースインパクト",
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    name_jp: "アクアインパクト",
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    name_jp: "フレアインパクト",
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    name_jp: "ゲイルインパクト",
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    name_jp: "クロノインパクト",
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    name_jp: "ゴルトインパクト",
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    name_jp: "カオスインパクト",
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    name_jp: "アースインパクトII",
    elementalValues: new Map([[Element.Earth, 8]]),
  },
  {
    name_jp: "アクアインパクトII",
    elementalValues: new Map([[Element.Water, 8]]),
  },
  {
    name_jp: "フレアインパクトII",
    elementalValues: new Map([[Element.Fire, 8]]),
  },
  {
    name_jp: "ゲイルインパクトII",
    elementalValues: new Map([[Element.Wind, 8]]),
  },
  {
    name_jp: "クロノインパクトII",
    elementalValues: new Map([[Element.Time, 8]]),
  },
  {
    name_jp: "ゴルトインパクトII",
    elementalValues: new Map([[Element.Space, 8]]),
  },
  {
    name_jp: "カオスインパクトII",
    elementalValues: new Map([[Element.Mirage, 8]]),
  },
  {
    name_jp: "ソードブレイカー",
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    name_jp: "ソードブレイカー改",
    elementalValues: new Map([
      [Element.Space, 10],
      [Element.Fire, 5],
    ]),
  },
  {
    name_jp: "シールドブレイカー",
    elementalValues: new Map([
      [Element.Time, 3],
      [Element.Earth, 5],
    ]),
  },
  {
    name_jp: "シールドブレイカー改",
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Earth, 10],
    ]),
  },
  {
    name_jp: "破剣の強襲",
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Space, 3],
    ]),
  },
  {
    name_jp: "破剣の超強襲",
    elementalValues: new Map([
      [Element.Mirage, 10],
      [Element.Space, 5],
    ]),
  },
  {
    name_jp: "破盾の強襲",
    elementalValues: new Map([
      [Element.Wind, 3],
      [Element.Water, 5],
    ]),
  },
  {
    name_jp: "破盾の超強襲",
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Water, 10],
    ]),
  },
  {
    name_jp: "フェイタルランサー",
    elementalValues: new Map([
      [Element.Time, 10],
      [Element.Earth, 3],
    ]),
  },
  {
    name_jp: "フェイタルランサー改",
    elementalValues: new Map([
      [Element.Time, 12],
      [Element.Earth, 6],
    ]),
  },
  {
    name_jp: "バーストゲイン",
    elementalValues: new Map([
      [Element.Fire, 6],
      [Element.Water, 3],
    ]),
  },
  {
    name_jp: "バーストゲインII",
    elementalValues: new Map([
      [Element.Fire, 12],
      [Element.Water, 6],
    ]),
  },
  {
    name_jp: "エクスキューショナー",
    elementalValues: new Map([
      [Element.Mirage, 3],
      [Element.Wind, 6],
    ]),
  },
  {
    name_jp: "エクスキューショナー改",
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Wind, 12],
    ]),
  },
] as ShardSkill[];

// id 28 to 55
export const SHIELD_LINE_SHARD_SKILLS = [
  {
    name_jp: "アースレジスト",
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    name_jp: "アクアレジスト",
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    name_jp: "フレアレジスト",
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    name_jp: "ゲイルレジスト",
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    name_jp: "ダークレジスト",
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    name_jp: "ゴルトレジスト",
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    name_jp: "カオスレジスト",
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    name_jp: "アースレジストII",
    elementalValues: new Map([[Element.Earth, 8]]),
  },
  {
    name_jp: "アクアレジストII",
    elementalValues: new Map([[Element.Water, 8]]),
  },
  {
    name_jp: "フレアレジストII",
    elementalValues: new Map([[Element.Fire, 8]]),
  },
  {
    name_jp: "ゲイルレジストII",
    elementalValues: new Map([[Element.Wind, 8]]),
  },
  {
    name_jp: "ダークレジストII",
    elementalValues: new Map([[Element.Time, 8]]),
  },
  {
    name_jp: "ゴルトレジストII",
    elementalValues: new Map([[Element.Space, 8]]),
  },
  {
    name_jp: "カオスレジストII",
    elementalValues: new Map([[Element.Mirage, 8]]),
  },
  {
    name_jp: "リカバーガード",
    elementalValues: new Map([
      [Element.Space, 2],
      [Element.Water, 4],
    ]),
  },
  {
    name_jp: "Aリカバーガード",
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Water, 10],
    ]),
  },
  {
    name_jp: "ライズガード",
    elementalValues: new Map([
      [Element.Wind, 2],
      [Element.Fire, 4],
    ]),
  },
  {
    name_jp: "Aライズガード",
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Fire, 10],
    ]),
  },
  {
    name_jp: "フォルテガード",
    elementalValues: new Map([
      [Element.Mirage, 2],
      [Element.Fire, 4],
    ]),
  },
  {
    name_jp: "Aフォルテガード",
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Fire, 10],
    ]),
  },
  {
    name_jp: "クレストガード",
    elementalValues: new Map([
      [Element.Time, 2],
      [Element.Earth, 4],
    ]),
  },
  {
    name_jp: "Aクレストガード",
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Earth, 10],
    ]),
  },
  {
    name_jp: "カバーシールド",
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Earth, 3],
    ]),
  },
  {
    name_jp: "カバーシールドII",
    elementalValues: new Map([
      [Element.Mirage, 12],
      [Element.Earth, 6],
    ]),
  },
  {
    name_jp: "リベンジアロー",
    elementalValues: new Map([
      [Element.Time, 6],
      [Element.Wind, 3],
    ]),
  },
  {
    name_jp: "リベンジアロー改",
    elementalValues: new Map([
      [Element.Time, 12],
      [Element.Wind, 6],
    ]),
  },
  {
    name_jp: "セラフィムフォース",
    elementalValues: new Map([
      [Element.Space, 6],
      [Element.Water, 3],
    ]),
  },
  {
    name_jp: "セラフィムフォース改",
    elementalValues: new Map([
      [Element.Space, 12],
      [Element.Water, 6],
    ]),
  },
] as ShardSkill[];

// id 56 to 83
export const DRIVE_LINE_SHARD_SKILLS = [
  {
    name_jp: "アースブースト",
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    name_jp: "アクアブースト",
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    name_jp: "フレアブースト",
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    name_jp: "ゲイルブースト",
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    name_jp: "クロノブースト",
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    name_jp: "ゴルトブースト",
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    name_jp: "カオスブースト",
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    name_jp: "アースブーストII",
    elementalValues: new Map([[Element.Earth, 8]]),
  },
  {
    name_jp: "アクアブーストII",
    elementalValues: new Map([[Element.Water, 8]]),
  },
  {
    name_jp: "フレアブーストII",
    elementalValues: new Map([[Element.Fire, 8]]),
  },
  {
    name_jp: "ゲイルブーストII",
    elementalValues: new Map([[Element.Wind, 8]]),
  },
  {
    name_jp: "クロノブーストII",
    elementalValues: new Map([[Element.Time, 8]]),
  },
  {
    name_jp: "ゴルトブーストII",
    elementalValues: new Map([[Element.Space, 8]]),
  },
  {
    name_jp: "カオスブーストII",
    elementalValues: new Map([[Element.Mirage, 8]]),
  },
  {
    name_jp: "マインドクラッカー",
    elementalValues: new Map([
      [Element.Mirage, 3],
      [Element.Wind, 5],
    ]),
  },
  {
    name_jp: "マインドクラッカー改",
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Wind, 10],
    ]),
  },
  {
    name_jp: "スピリットクラッカー",
    elementalValues: new Map([
      [Element.Space, 3],
      [Element.Earth, 5],
    ]),
  },
  {
    name_jp: "スピリットクラッカー改",
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Earth, 10],
    ]),
  },
  {
    name_jp: "破言の強襲",
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    name_jp: "破言の超強襲",
    elementalValues: new Map([
      [Element.Time, 10],
      [Element.Fire, 5],
    ]),
  },
  {
    name_jp: "破霊の強襲",
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Water, 3],
    ]),
  },
  {
    name_jp: "破霊の超強襲",
    elementalValues: new Map([
      [Element.Time, 10],
      [Element.Water, 5],
    ]),
  },
  {
    name_jp: "アークフェザー",
    elementalValues: new Map([
      [Element.Mirage, 10],
      [Element.Wind, 3],
    ]),
  },
  {
    name_jp: "アークフェザー改",
    elementalValues: new Map([
      [Element.Mirage, 12],
      [Element.Wind, 6],
    ]),
  },
  {
    name_jp: "カタラクトゲイン",
    elementalValues: new Map([
      [Element.Water, 6],
      [Element.Earth, 3],
    ]),
  },
  {
    name_jp: "カタラクトゲインII",
    elementalValues: new Map([
      [Element.Water, 12],
      [Element.Earth, 6],
    ]),
  },
  {
    name_jp: "アベンジャースペル",
    elementalValues: new Map([
      [Element.Space, 6],
      [Element.Fire, 3],
    ]),
  },
  {
    name_jp: "アベンジャースペル改",
    elementalValues: new Map([
      [Element.Space, 12],
      [Element.Fire, 6],
    ]),
  },
] as ShardSkill[];

// id 84 to 115
export const EXTRA_LINE_SHARD_SKILLS = [
  {
    name_jp: "ガードスターター",
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    name_jp: "エナジースターター",
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    name_jp: "パワースターター",
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    name_jp: "ギフトスターター",
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    name_jp: "クイックスターター",
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    name_jp: "アーツスターター",
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    name_jp: "ファントムスターター",
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    name_jp: "ガードスターターII",
    elementalValues: new Map([[Element.Earth, 10]]),
  },
  {
    name_jp: "エナジースターターII",
    elementalValues: new Map([[Element.Water, 10]]),
  },
  {
    name_jp: "パワースターターII",
    elementalValues: new Map([[Element.Fire, 10]]),
  },
  {
    name_jp: "ギフトスターターII",
    elementalValues: new Map([[Element.Wind, 10]]),
  },
  {
    name_jp: "クイックスターターII",
    elementalValues: new Map([[Element.Time, 10]]),
  },
  {
    name_jp: "アーツスターターII",
    elementalValues: new Map([[Element.Space, 10]]),
  },
  {
    name_jp: "ファントムスターターII",
    elementalValues: new Map([[Element.Mirage, 10]]),
  },
  {
    name_jp: "ゴールデンアイ",
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    name_jp: "レッグブレイカー",
    elementalValues: new Map([
      [Element.Mirage, 3],
      [Element.Time, 5],
    ]),
  },
  {
    name_jp: "レッグブレイカー改",
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Time, 10],
    ]),
  },
  {
    name_jp: "破迅の強襲",
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Time, 3],
    ]),
  },
  {
    name_jp: "破迅の超強襲",
    elementalValues: new Map([
      [Element.Space, 10],
      [Element.Time, 6],
    ]),
  },
  {
    name_jp: "オートフォルテ",
    elementalValues: new Map([
      [Element.Space, 4],
      [Element.Fire, 4],
    ]),
  },
  {
    name_jp: "オートクレスト",
    elementalValues: new Map([
      [Element.Space, 4],
      [Element.Earth, 4],
    ]),
  },
  {
    name_jp: "オートクイック",
    elementalValues: new Map([
      [Element.Space, 4],
      [Element.Time, 4],
    ]),
  },
  {
    name_jp: "エナジーチャージャー",
    elementalValues: new Map([[Element.Water, 6]]),
  },
  {
    name_jp: "エナジーチャージャーII",
    elementalValues: new Map([[Element.Water, 12]]),
  },
  {
    name_jp: "パワーチャージャー",
    elementalValues: new Map([
      [Element.Wind, 3],
      [Element.Fire, 6],
    ]),
  },
  {
    name_jp: "パワーチャージャーII",
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Fire, 12],
    ]),
  },
  {
    name_jp: "スクラムアップ",
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Earth, 3],
    ]),
  },
  {
    name_jp: "スクラムアップII",
    elementalValues: new Map([
      [Element.Wind, 12],
      [Element.Earth, 6],
    ]),
  },
  {
    name_jp: "クライシスフォース",
    elementalValues: new Map([
      [Element.Fire, 3],
      [Element.Earth, 6],
    ]),
  },
  {
    name_jp: "クライシスフォースII",
    elementalValues: new Map([
      [Element.Fire, 6],
      [Element.Earth, 12],
    ]),
  },
  {
    name_jp: "ヘブンリーラック",
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Water, 3],
    ]),
  },
  {
    name_jp: "ヘブンリーラックII",
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
