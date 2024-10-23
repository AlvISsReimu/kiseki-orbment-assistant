import { Element } from "./element.js";
import { QuartzLineType } from "./quartzLine.js";

export class Quartz {
  id: number;
  name_jp: string;
  element: Element;
  elementalValues: Map<Element, number>;
  lineTypeLimit: QuartzLineType[] | null;
}

export const getQuartzById = (id: number): Quartz | null => {
  const quartz = ALL_QUARTZ_MAP.get(id);
  return quartz ?? null;
};

export const getQuartzIdByNameJP = (name_jp: string): number | null => {
  for (let i = 0; i < ALL_QUARTZ.length; i++) {
    if (ALL_QUARTZ[i].name_jp === name_jp) {
      return i;
    }
  }
  return null;
};

export const getRandomQuartzId = (blacklistIds: number[] | null): number => {
  let index: number;
  let max = ALL_QUARTZ.length;
  do {
    index = Math.floor(Math.random() * ALL_QUARTZ.length);
    max--;
  } while (blacklistIds && blacklistIds.includes(index) && max > 0);
  return index;
};

export const EARTH_QUARTZ = [
  {
    id: 0,
    name_jp: "防御1",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 2]]),
  },
  {
    id: 1,
    name_jp: "防御2",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 4]]),
  },
  {
    id: 2,
    name_jp: "防御3",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 6]]),
  },
  {
    id: 3,
    name_jp: "EP1",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 2]]),
  },

  {
    id: 4,
    name_jp: "EP2",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 4]]),
  },
  {
    id: 5,
    name_jp: "EP3",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 6]]),
  },
  {
    id: 6,
    name_jp: "琥耀珠",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 8]]),
  },
  {
    id: 7,
    name_jp: "腐蝕の刃",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 8,
    name_jp: "腐蝕の刃II",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 9,
    name_jp: "地霊の詩",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 10,
    name_jp: "大地の詩",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 11,
    name_jp: "黄晶の輪",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 12,
    name_jp: "鋼玉の輪",
    element: Element.Earth,
    elementalValues: new Map([[Element.Earth, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 13,
    name_jp: "耀脈",
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 4],
      [Element.Fire, 2],
    ]),
  },
  {
    id: 14,
    name_jp: "秘脈",
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 15,
    name_jp: "ゴリアテ",
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 5],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 16,
    name_jp: "アンクシャ",
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 6],
      [Element.Mirage, 4],
    ]),
  },
  {
    id: 17,
    name_jp: "デイダラボッチ",
    element: Element.Earth,
    elementalValues: new Map([
      [Element.Earth, 7],
      [Element.Space, 5],
    ]),
  },
] as Quartz[];

export const WATER_QUARTZ = [
  {
    id: 18,
    name_jp: "HP1",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 19,
    name_jp: "HP2",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 4]]),
  },
  {
    id: 20,
    name_jp: "HP3",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 6]]),
  },
  {
    id: 21,
    name_jp: "魔防1",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 2]]),
  },
  {
    id: 22,
    name_jp: "魔防2",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 4]]),
  },
  {
    id: 23,
    name_jp: "魔防3",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 6]]),
  },
  {
    id: 24,
    name_jp: "蒼耀珠",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 8]]),
  },
  {
    id: 25,
    name_jp: "凍結の刃",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 26,
    name_jp: "凍結の刃II",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 27,
    name_jp: "水霊の詩",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 28,
    name_jp: "蒼氷の詩",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 29,
    name_jp: "青晶の輪",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 30,
    name_jp: "藍玉の輪",
    element: Element.Water,
    elementalValues: new Map([[Element.Water, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 31,
    name_jp: "息吹",
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 4],
      [Element.Earth, 2],
    ]),
  },
  {
    id: 32,
    name_jp: "慈愛",
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 5],
      [Element.Earth, 3],
    ]),
  },
  {
    id: 33,
    name_jp: "カリオペ",
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 5],
      [Element.Space, 3],
    ]),
  },
  {
    id: 34,
    name_jp: "フロレント",
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 6],
      [Element.Fire, 4],
    ]),
  },
  {
    id: 35,
    name_jp: "コノハナサクヤ",
    element: Element.Water,
    elementalValues: new Map([
      [Element.Water, 7],
      [Element.Mirage, 5],
    ]),
  },
] as Quartz[];

export const FIRE_QUARTZ = [
  {
    id: 36,
    name_jp: "攻撃1",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 37,
    name_jp: "攻撃2",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 4]]),
  },
  {
    id: 38,
    name_jp: "攻撃3",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 6]]),
  },
  {
    id: 39,
    name_jp: "破壊1",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 2]]),
  },
  {
    id: 40,
    name_jp: "破壊2",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 4]]),
  },
  {
    id: 41,
    name_jp: "破壊3",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 6]]),
  },
  {
    id: 42,
    name_jp: "紅耀珠",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 8]]),
  },
  {
    id: 43,
    name_jp: "炎傷の刃",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 44,
    name_jp: "炎傷の刃II",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 45,
    name_jp: "火霊の詩",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 46,
    name_jp: "業火の詩",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 47,
    name_jp: "赤晶の輪",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 48,
    name_jp: "紅玉の輪",
    element: Element.Fire,
    elementalValues: new Map([[Element.Fire, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 49,
    name_jp: "烈火",
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 4],
      [Element.Wind, 2],
    ]),
  },
  {
    id: 50,
    name_jp: "猛炎",
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 5],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 51,
    name_jp: "スマウグ",
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 5],
      [Element.Water, 3],
    ]),
  },
  {
    id: 52,
    name_jp: "ベオウルフ",
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 6],
      [Element.Time, 4],
    ]),
  },
  {
    id: 53,
    name_jp: "プロメテウス",
    element: Element.Fire,
    elementalValues: new Map([
      [Element.Fire, 7],
      [Element.Mirage, 5],
    ]),
  },
] as Quartz[];

export const WIND_QUARTZ = [
  {
    id: 54,
    name_jp: "回避1",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 55,
    name_jp: "回避2",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 4]]),
  },
  {
    id: 56,
    name_jp: "回避3",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 6]]),
  },
  {
    id: 57,
    name_jp: "必殺1",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 2]]),
  },
  {
    id: 58,
    name_jp: "必殺2",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 4]]),
  },
  {
    id: 59,
    name_jp: "必殺3",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 6]]),
  },
  {
    id: 60,
    name_jp: "翠耀珠",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 8]]),
  },
  {
    id: 61,
    name_jp: "封技の刃",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 62,
    name_jp: "封技の刃II",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 63,
    name_jp: "風霊の詩",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 64,
    name_jp: "威風の詩",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 65,
    name_jp: "緑晶の輪",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 66,
    name_jp: "翠玉の輪",
    element: Element.Wind,
    elementalValues: new Map([[Element.Wind, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 67,
    name_jp: "美臭",
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 4],
      [Element.Water, 2],
    ]),
  },
  {
    id: 68,
    name_jp: "不屈",
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Water, 3],
    ]),
  },
  {
    id: 69,
    name_jp: "ガラドリエル",
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 5],
      [Element.Mirage, 3],
    ]),
  },
  {
    id: 70,
    name_jp: "クサナギ",
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 6],
      [Element.Space, 4],
    ]),
  },
  {
    id: 71,
    name_jp: "ハヌマーン",
    element: Element.Wind,
    elementalValues: new Map([
      [Element.Wind, 7],
      [Element.Time, 5],
    ]),
  },
] as Quartz[];

export const TIME_QUARTZ = [
  {
    id: 72,
    name_jp: "行動力1",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 73,
    name_jp: "行動力2",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 4]]),
  },
  {
    id: 74,
    name_jp: "行動力3",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 6]]),
  },
  {
    id: 75,
    name_jp: "駆動1",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 2]]),
  },
  {
    id: 76,
    name_jp: "駆動2",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 4]]),
  },
  {
    id: 77,
    name_jp: "駆動3",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 6]]),
  },
  {
    id: 78,
    name_jp: "黒耀珠",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 8]]),
  },
  {
    id: 79,
    name_jp: "冥暗の刃",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 80,
    name_jp: "冥暗の刃II",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 81,
    name_jp: "星霊の詩",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 82,
    name_jp: "暁星の詩",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 83,
    name_jp: "紫晶の輪",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 84,
    name_jp: "黒銀の輪",
    element: Element.Time,
    elementalValues: new Map([[Element.Time, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 85,
    name_jp: "幸運",
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 4],
      [Element.Wind, 2],
    ]),
  },
  {
    id: 86,
    name_jp: "豪運",
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 87,
    name_jp: "バンダースナッチ",
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 88,
    name_jp: "グングニル",
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 6],
      [Element.Earth, 4],
    ]),
  },
  {
    id: 89,
    name_jp: "ヘカテー",
    element: Element.Time,
    elementalValues: new Map([
      [Element.Time, 7],
      [Element.Space, 5],
    ]),
  },
] as Quartz[];

export const SPACE_QUARTZ = [
  {
    id: 90,
    name_jp: "省EP1",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 91,
    name_jp: "省EP2",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 4]]),
  },
  {
    id: 92,
    name_jp: "省EP3",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 6]]),
  },
  {
    id: 93,
    name_jp: "命中1",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 2]]),
  },
  {
    id: 94,
    name_jp: "命中2",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 4]]),
  },
  {
    id: 95,
    name_jp: "命中3",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 6]]),
  },
  {
    id: 96,
    name_jp: "金耀珠",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 8]]),
  },
  {
    id: 97,
    name_jp: "封魔の刃",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 98,
    name_jp: "封魔の刃II",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 99,
    name_jp: "陽霊の詩",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 100,
    name_jp: "極光の詩",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 101,
    name_jp: "金晶の輪",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 102,
    name_jp: "黄金の輪",
    element: Element.Space,
    elementalValues: new Map([[Element.Space, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 103,
    name_jp: "天啓",
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 4],
      [Element.Fire, 2],
    ]),
  },
  {
    id: 104,
    name_jp: "神託",
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Fire, 3],
    ]),
  },
  {
    id: 105,
    name_jp: "マーチヘア",
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 5],
      [Element.Wind, 3],
    ]),
  },
  {
    id: 106,
    name_jp: "カドゥケウス",
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 6],
      [Element.Mirage, 4],
    ]),
  },
  {
    id: 107,
    name_jp: "クロートー",
    element: Element.Space,
    elementalValues: new Map([
      [Element.Space, 7],
      [Element.Earth, 5],
    ]),
  },
] as Quartz[];

export const MIRAGE_QUARTZ = [
  {
    id: 108,
    name_jp: "精神1",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 109,
    name_jp: "精神2",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 4]]),
  },
  {
    id: 110,
    name_jp: "精神3",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 6]]),
  },
  {
    id: 111,
    name_jp: "妨害1",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 2]]),
  },
  {
    id: 112,
    name_jp: "妨害2",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 4]]),
  },
  {
    id: 113,
    name_jp: "妨害3",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 6]]),
  },
  {
    id: 114,
    name_jp: "銀耀珠",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 8]]),
  },
  {
    id: 115,
    name_jp: "恐怖の刃",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 116,
    name_jp: "恐怖の刃II",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Weapon, QuartzLineType.Extra],
  },
  {
    id: 117,
    name_jp: "月霊の詩",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 118,
    name_jp: "朧月の詩",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Drive, QuartzLineType.Extra],
  },
  {
    id: 119,
    name_jp: "銀晶の輪",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 3]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 120,
    name_jp: "白銀の輪",
    element: Element.Mirage,
    elementalValues: new Map([[Element.Mirage, 5]]),
    lineTypeLimit: [QuartzLineType.Shield, QuartzLineType.Extra],
  },
  {
    id: 121,
    name_jp: "空蝉",
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 4],
      [Element.Water, 2],
    ]),
  },
  {
    id: 122,
    name_jp: "隠者",
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Water, 3],
    ]),
  },
  {
    id: 123,
    name_jp: "ジャバウォッキー",
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 5],
      [Element.Earth, 3],
    ]),
  },
  {
    id: 124,
    name_jp: "デュランダル",
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 6],
      [Element.Wind, 4],
    ]),
  },
  {
    id: 125,
    name_jp: "アストライオス",
    element: Element.Mirage,
    elementalValues: new Map([
      [Element.Mirage, 7],
      [Element.Time, 5],
    ]),
  },
] as Quartz[];

export const ALL_QUARTZ = [
  ...EARTH_QUARTZ,
  ...WATER_QUARTZ,
  ...FIRE_QUARTZ,
  ...WIND_QUARTZ,
  ...TIME_QUARTZ,
  ...SPACE_QUARTZ,
  ...MIRAGE_QUARTZ,
] as Quartz[];

export const ALL_QUARTZ_MAP = new Map<number, Quartz>(
  ALL_QUARTZ.map((quartz) => [quartz.id, quartz])
);
