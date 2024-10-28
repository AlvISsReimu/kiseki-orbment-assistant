import { ElementType } from '@shared/enums/elementType'
import { LanguageCode } from '@shared/enums/languageCode'
import { getQuartzIdByName } from '@shared/model/quartz'
import {
  DriveLine,
  ExtraLine,
  ShieldLine,
  WeaponLine,
} from '@shared/model/quartzLine'
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

// TODO: finish all tests
