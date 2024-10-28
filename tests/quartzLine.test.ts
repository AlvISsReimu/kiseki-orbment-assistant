import { ElementType } from '@shared/enums/elementType'
import { LanguageCode } from '@shared/enums/languageCode'
import { getQuartzIdByName, type QuartzId } from '@shared/model/quartz'
import {
  DriveLine,
  ExtraLine,
  ShieldLine,
  WeaponLine,
} from '@shared/model/quartzLine'
import { ScoreMaps } from '@shared/model/scoreMaps'
import {
  getShardSkillIdByName,
  type ShardSkillId,
} from '@shared/model/shardSkill'
import {
  createElementLimitedSlot,
  ElementLimitedSlot,
} from '@shared/model/slot'
import { expect, test } from 'vitest'

test('Calculate sum of elemental values', () => {
  const languageCode = LanguageCode.JA
  const quartzIdInLimitedSlot = getQuartzIdByName('ゴリアテ', languageCode) // Earth x5, Time x3
  const firstQuartzIdInRegularSlot = getQuartzIdByName(
    'アンクシャ',
    languageCode,
  ) // Earth x6, Water x4
  const secondQuartzIdInRegularSlot = getQuartzIdByName('省EP1', languageCode) // Space x2
  const quartzLine = new WeaponLine(
    4,
    [firstQuartzIdInRegularSlot, secondQuartzIdInRegularSlot],
    [new ElementLimitedSlot(ElementType.Earth, 1, quartzIdInLimitedSlot)], // doubled to be: Earth x10, Time x6
  )
  const sumMap = quartzLine.calcSumElementalValues()

  expect(sumMap.get(ElementType.Earth)).toBe(16)
  expect(sumMap.get(ElementType.Water)).toBe(4)
  expect(sumMap.get(ElementType.Time)).toBe(6)
  expect(sumMap.get(ElementType.Space)).toBe(2)
})

test('Add a quartz to a random regular slot in a quartz line which has no element limited slot', () => {
  const quartzLine = new WeaponLine(3, [], [])
  const quartzId = getQuartzIdByName('ゴリアテ', LanguageCode.JA)
  quartzLine.addOrReplaceQuartz(quartzId)
  expect(quartzLine.regularSlotQuartzIds.length).toBe(1)
  expect(quartzLine.regularSlotQuartzIds[0]).toBe(quartzId)
})

test('Add a quartz to a random regular slot in a quartz line which has element limited slot', () => {
  const quartzLine = new ShieldLine(
    4,
    [],
    [createElementLimitedSlot(ElementType.Water, 2)],
  )
  const quartzId = getQuartzIdByName('ゴリアテ', LanguageCode.JA)
  quartzLine.addOrReplaceQuartz(quartzId)
  expect(quartzLine.regularSlotQuartzIds.length).toBe(1)
  expect(quartzLine.regularSlotQuartzIds[0]).toBe(quartzId)
  expect(quartzLine.elementLimitedSlots[0].quartzId).toBeNull()
})

test('Add a quartz to a line which has a limited slot whose element is the same as the quartz', () => {
  const quartzLine = new DriveLine(
    4,
    [],
    [createElementLimitedSlot(ElementType.Fire, 1)],
  )
  const quartzId = getQuartzIdByName('攻击1', LanguageCode.ZH_CN)
  quartzLine.addOrReplaceQuartz(quartzId)
  const isAddedToRegularSlot =
    quartzLine.regularSlotQuartzIds.includes(quartzId)

  if (isAddedToRegularSlot) {
    expect(quartzLine.regularSlotQuartzIds.length).toBe(1)
    expect(quartzLine.regularSlotQuartzIds[0]).toBe(quartzId)
  } else {
    expect(quartzLine.elementLimitedSlots[0].quartzId).toBe(quartzId)
  }
})

test('Replace a quartz in a random regular slot', () => {
  const languageCode = LanguageCode.JA

  const firstQuartzIdInRegularSlot = getQuartzIdByName(
    'アンクシャ',
    languageCode,
  )
  const secondQuartzIdInRegularSlot = getQuartzIdByName('省EP1', languageCode)
  const thirdQuartzIdInRegularSlot = getQuartzIdByName('魔防2', languageCode)
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', languageCode)

  const quartzLine = new ExtraLine(
    4,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
      thirdQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Wind, 3, quartzIdInLimitedSlot)],
  )
  const quartzId = getQuartzIdByName('ゴリアテ', LanguageCode.JA)
  quartzLine.addOrReplaceQuartz(quartzId)
  expect(quartzLine.regularSlotQuartzIds.length).toBe(3)
  expect(quartzLine.regularSlotQuartzIds).toContain(quartzId)
  expect(quartzLine.elementLimitedSlots[0].quartzId).toBe(quartzIdInLimitedSlot)
})

test('Add a quartz to a line which already has the same quartz', () => {
  const languageCode = LanguageCode.JA

  const firstQuartzIdInRegularSlot = getQuartzIdByName(
    'アンクシャ',
    languageCode,
  )
  const secondQuartzIdInRegularSlot = getQuartzIdByName('省EP1', languageCode)
  const thirdQuartzIdInRegularSlot = getQuartzIdByName('魔防2', languageCode)
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', languageCode)

  const quartzLine = new ExtraLine(
    4,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
      thirdQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Wind, 3, quartzIdInLimitedSlot)],
  )
  const quartzId = secondQuartzIdInRegularSlot
  quartzLine.addOrReplaceQuartz(quartzId)

  expect(quartzLine.regularSlotQuartzIds.length).toBe(3)
  expect(quartzLine.regularSlotQuartzIds).toContain(firstQuartzIdInRegularSlot)
  expect(quartzLine.regularSlotQuartzIds).toContain(secondQuartzIdInRegularSlot)
  expect(quartzLine.regularSlotQuartzIds).toContain(thirdQuartzIdInRegularSlot)
  expect(quartzLine.elementLimitedSlots[0].quartzId).toBe(quartzIdInLimitedSlot)
})

test('Remove a quartz from a regular slot', () => {
  const languageCode = LanguageCode.JA

  const firstQuartzIdInRegularSlot = getQuartzIdByName(
    'アンクシャ',
    languageCode,
  )
  const secondQuartzIdInRegularSlot = getQuartzIdByName('省EP1', languageCode)
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', languageCode)

  const quartzLine = new WeaponLine(
    4,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Wind, 3, quartzIdInLimitedSlot)],
  )
  const isRemoveSuccess = quartzLine.removeQuartz(firstQuartzIdInRegularSlot)

  expect(isRemoveSuccess).toBe(true)
  expect(quartzLine.regularSlotQuartzIds.length).toBe(1)
  expect(quartzLine.regularSlotQuartzIds).toContain(secondQuartzIdInRegularSlot)
  expect(quartzLine.elementLimitedSlots[0].quartzId).toBe(quartzIdInLimitedSlot)
})

test('Remove a quartz from an element limited slot', () => {
  const languageCode = LanguageCode.JA

  const firstQuartzIdInRegularSlot = getQuartzIdByName(
    'アンクシャ',
    languageCode,
  )
  const secondQuartzIdInRegularSlot = getQuartzIdByName('省EP1', languageCode)
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', languageCode)

  const quartzLine = new WeaponLine(
    4,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Wind, 3, quartzIdInLimitedSlot)],
  )
  const isRemoveSuccess = quartzLine.removeQuartz(quartzIdInLimitedSlot)

  expect(isRemoveSuccess).toBe(true)
  expect(quartzLine.regularSlotQuartzIds.length).toBe(2)
  expect(quartzLine.regularSlotQuartzIds).toContain(firstQuartzIdInRegularSlot)
  expect(quartzLine.regularSlotQuartzIds).toContain(secondQuartzIdInRegularSlot)
  expect(quartzLine.elementLimitedSlots[0].quartzId).toBeNull()
})

test('Remove a quartz that does not exist in the line', () => {
  const languageCode = LanguageCode.JA

  const firstQuartzIdInRegularSlot = getQuartzIdByName(
    'アンクシャ',
    languageCode,
  )
  const secondQuartzIdInRegularSlot = getQuartzIdByName('省EP1', languageCode)
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', languageCode)
  const quartzIdNotInLine = getQuartzIdByName('省EP2', languageCode)

  const quartzLine = new WeaponLine(
    4,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Wind, 3, quartzIdInLimitedSlot)],
  )
  const isRemoveSuccess = quartzLine.removeQuartz(quartzIdNotInLine)
  expect(isRemoveSuccess).toBe(false)
})

test('Analyze current shard skills', () => {
  const languageCode = LanguageCode.ZH_CN

  const firstQuartzIdInRegularSlot = getQuartzIdByName('卡利俄佩', languageCode)
  const secondQuartzIdInRegularSlot = getQuartzIdByName(
    '苍冰之诗',
    languageCode,
  )
  const thirdQuartzIdInRegularSlot = getQuartzIdByName('库罗索', languageCode)
  const quartzIdInLimitedSlot = getQuartzIdByName('杜兰达尔', languageCode)

  const quartzLine = new DriveLine(
    4,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
      thirdQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Mirage, 1, quartzIdInLimitedSlot)],
  )
  // Elemental values are: (5, 10, 0, 8, 0, 10, 12)
  const shardSkills = quartzLine.analyzeCurrentShardSkills()
  expect(shardSkills.length).toBe(9)
  const shardSkillNames = shardSkills.map(
    skill => skill.name_i18n[languageCode],
  )
  expect(shardSkillNames).toContain('大地增幅')
  expect(shardSkillNames).toContain('水花增幅II')
  expect(shardSkillNames).toContain('疾风增幅II')
  expect(shardSkillNames).toContain('碧空增幅II')
  expect(shardSkillNames).toContain('幻影增幅II')
  expect(shardSkillNames).toContain('碎心者')
  expect(shardSkillNames).toContain('碎魂者')
  expect(shardSkillNames).toContain('神圣之羽改')
  expect(shardSkillNames).toContain('奔流吸收')
  expect(shardSkillNames).not.toContain('水花增幅')
  expect(shardSkillNames).not.toContain('神圣之羽')
  expect(shardSkillNames).not.toContain('奔流吸收II')
})

test('Analyze current shard skills with no quartz', () => {
  const quartzLine = new ShieldLine(
    4,
    [],
    [createElementLimitedSlot(ElementType.Fire, 1)],
  )
  const shardSkills = quartzLine.analyzeCurrentShardSkills()
  expect(shardSkills.length).toBe(0)
})

test('Has quartz in the line', () => {
  const languageCode = LanguageCode.JA

  const firstQuartzIdInRegularSlot = getQuartzIdByName(
    'アンクシャ',
    languageCode,
  )
  const secondQuartzIdInRegularSlot = getQuartzIdByName('省EP1', languageCode)
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', languageCode)
  const quartzIdNotInLine = getQuartzIdByName('省EP2', languageCode)

  const quartzLine = new WeaponLine(
    3,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Wind, 3, quartzIdInLimitedSlot)],
  )
  expect(quartzLine.hasQuartz(firstQuartzIdInRegularSlot)).toBe(true)
  expect(quartzLine.hasQuartz(secondQuartzIdInRegularSlot)).toBe(true)
  expect(quartzLine.hasQuartz(quartzIdInLimitedSlot)).toBe(true)
  expect(quartzLine.hasQuartz(quartzIdNotInLine)).toBe(false)
})

test('Get flattened quartz ids', () => {
  const languageCode = LanguageCode.ZH_CN

  const firstQuartzIdInRegularSlot = getQuartzIdByName('卡利俄佩', languageCode)
  const secondQuartzIdInRegularSlot = getQuartzIdByName(
    '苍冰之诗',
    languageCode,
  )
  const quartzIdInLimitedSlot = getQuartzIdByName('杜兰达尔', languageCode)

  const quartzLine = new DriveLine(
    4,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Mirage, 0, quartzIdInLimitedSlot)],
  )
  const flattenedQuartzIds = quartzLine.getFlattenedQuartzIds()
  expect(flattenedQuartzIds.length).toBe(3)
  expect(flattenedQuartzIds).toContain(firstQuartzIdInRegularSlot)
  expect(flattenedQuartzIds).toContain(secondQuartzIdInRegularSlot)
  expect(flattenedQuartzIds).toContain(quartzIdInLimitedSlot)
})

test('Calculate score for many quartz and shard skills', () => {
  const languageCode = LanguageCode.ZH_CN

  const firstQuartzIdInRegularSlot = getQuartzIdByName('卡利俄佩', languageCode)
  const secondQuartzIdInRegularSlot = getQuartzIdByName(
    '苍冰之诗',
    languageCode,
  )
  const thirdQuartzIdInRegularSlot = getQuartzIdByName('库罗索', languageCode)
  const quartzIdInLimitedSlot = getQuartzIdByName('杜兰达尔', languageCode)

  const quartzLine = new DriveLine(
    4,
    [
      firstQuartzIdInRegularSlot,
      secondQuartzIdInRegularSlot,
      thirdQuartzIdInRegularSlot,
    ],
    [new ElementLimitedSlot(ElementType.Mirage, 1, quartzIdInLimitedSlot)],
  )

  const scoreMaps = new ScoreMaps(
    new Map<QuartzId, number>([
      [getQuartzIdByName('卡利俄佩', languageCode), 1],
      [getQuartzIdByName('库罗索', languageCode), 4],
      [getQuartzIdByName('杜兰达尔', languageCode), 8],
      [getQuartzIdByName('ゴリアテ', languageCode), 114514], // not in the line
    ]),
    new Map<ShardSkillId, number>([
      [getShardSkillIdByName('大地增幅', languageCode), 3],
      [getShardSkillIdByName('水花增幅II', languageCode), 7],
      [getShardSkillIdByName('神圣之羽改', languageCode), 10],
      [getShardSkillIdByName('水花增幅', languageCode), 114514], // won't be triggered
    ]),
  )
  const score = quartzLine.calcScore(scoreMaps)
  expect(score).toBe(1 + 4 + 8 + 3 + 7 + 10)
})

test('Calculate score for a line with no quartz', () => {
  const languageCode = LanguageCode.ZH_CN
  const quartzLine = new ShieldLine(
    4,
    [],
    [createElementLimitedSlot(ElementType.Water, 1)],
  )
  const scoreMaps = new ScoreMaps(
    new Map<QuartzId, number>([
      [getQuartzIdByName('ゴリアテ', languageCode), 114514],
    ]),
    new Map<ShardSkillId, number>([
      [getShardSkillIdByName('水花增幅', languageCode), 114514],
    ]),
  )
  const score = quartzLine.calcScore(scoreMaps)
  expect(score).toBe(0)
})
