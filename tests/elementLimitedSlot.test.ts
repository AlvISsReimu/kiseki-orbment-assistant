import { ElementType } from '@shared/enums/elementType'
import { LanguageCode } from '@shared/enums/languageCode'
import { getQuartzIdByName } from '@shared/model/quartz'
import { ElementLimitedSlot } from '@shared/model/slot'
import { expect, test } from 'vitest'

test('Has quartz in the slot', () => {
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', LanguageCode.JA)
  const slot = new ElementLimitedSlot(
    ElementType.Wind,
    3,
    quartzIdInLimitedSlot,
  )
  expect(slot.hasQuartz()).toBe(true)
})

test('No quartz in the slot', () => {
  const slot = new ElementLimitedSlot(ElementType.Wind, 3)
  expect(slot.hasQuartz()).toBe(false)
})

test('Set a quartz in the slot', () => {
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', LanguageCode.JA)
  const slot = new ElementLimitedSlot(ElementType.Wind, 3)
  slot.setQuartz(quartzIdInLimitedSlot)
  expect(slot.hasQuartz()).toBe(true)
  expect(slot.quartzId).toBe(quartzIdInLimitedSlot)
})

test('Remove a quartz from the slot', () => {
  const quartzIdInLimitedSlot = getQuartzIdByName('封技の刃', LanguageCode.JA)
  const slot = new ElementLimitedSlot(
    ElementType.Wind,
    3,
    quartzIdInLimitedSlot,
  )
  const isRemoveSuccess = slot.removeQuartz()
  expect(isRemoveSuccess).toBe(true)
  expect(slot.hasQuartz()).toBe(false)
  expect(slot.quartzId).toBe(null)
})

test('Remove a quartz from an empty slot', () => {
  const slot = new ElementLimitedSlot(ElementType.Wind, 3)
  const isRemoveSuccess = slot.removeQuartz()
  expect(isRemoveSuccess).toBe(false)
  expect(slot.hasQuartz()).toBe(false)
  expect(slot.quartzId).toBe(null)
})
