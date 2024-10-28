import { ALL_QUARTZ } from '@shared/constants/quartz.js'
import { LanguageCode } from '@shared/enums/languageCode'
import {
  getQuartzById,
  getQuartzIdByName,
  getRandomQuartzId,
  type QuartzId,
} from '@shared/model/quartz.js'
import { expect, test } from 'vitest'

test('Get quartz by id', () => {
  // Test for the first quartz
  let quartzId = 0 as QuartzId
  let quartz = ALL_QUARTZ[quartzId]
  let quartzById = getQuartzById(quartzId)
  expect(quartzById).toEqual(quartz)

  // Test for the last quartz
  quartzId = (ALL_QUARTZ.length - 1) as QuartzId
  quartz = ALL_QUARTZ[quartzId]
  quartzById = getQuartzById(quartzId)
  expect(quartzById).toEqual(quartz)
})

test('Get quartz by id with invalid id', () => {
  const quartzId = -1 as QuartzId
  const quartzById = getQuartzById(quartzId)
  expect(quartzById).toBeNull()
})

test('Get quartz id by name', () => {
  const quartzId = 0 as QuartzId
  const quartz = ALL_QUARTZ[quartzId]
  const languageCode = LanguageCode.EN
  const foundQuartzId = getQuartzIdByName(
    quartz.name_i18n[languageCode],
    languageCode,
  )
  expect(foundQuartzId).toEqual(quartzId)
})

test('Get quartz id by name with invalid name', () => {
  const foundQuartzId = getQuartzIdByName('invalid name', LanguageCode.EN)
  expect(foundQuartzId).toBeNull()
})

test('Get random quartz id without blacklistIds', () => {
  const quartzId = getRandomQuartzId()
  expect(quartzId).toBeGreaterThanOrEqual(0)
  expect(quartzId).toBeLessThan(ALL_QUARTZ.length)
})

test('Get random quartz id with empty blacklistIds', () => {
  const quartzId = getRandomQuartzId([])
  expect(quartzId).toBeGreaterThanOrEqual(0)
  expect(quartzId).toBeLessThan(ALL_QUARTZ.length)
})

test('Get (deterministic) random quartz id with nearly full blacklistIds', () => {
  const blacklistIds = Array.from(
    { length: ALL_QUARTZ.length - 1 },
    (_, i) => i,
  ) as QuartzId[]
  const quartzId = getRandomQuartzId(blacklistIds)
  expect(quartzId).equal(ALL_QUARTZ.length - 1)
})

test('Get random quartz id with full blacklistIds', () => {
  const blacklistIds = Array.from(
    { length: ALL_QUARTZ.length },
    (_, i) => i,
  ) as QuartzId[]
  const quartzId = getRandomQuartzId(blacklistIds)
  expect(quartzId).toBeGreaterThanOrEqual(0)
  expect(quartzId).toBeLessThan(ALL_QUARTZ.length)
})
