import type { ElementType } from '@shared/enums/elementType'
import type { LanguageCode } from '@shared/enums/languageCode'
import { getQuartzById, type QuartzId } from '@shared/model/quartz'

export const getQuartzIconUrlById = (quartzId: QuartzId) => {
  const quartz = getQuartzById(quartzId)
  const isAdvanced = quartz.elementalValues.size > 1
  const quartzIconName = `${quartz.elementType.toLocaleLowerCase()}_${isAdvanced ? 'advanced' : 'regular'}`
  const quartzIconWebps = import.meta.glob('../assets/quartz-icon/*.webp', {
    eager: true,
    query: '?url',
  })
  return (
    //@ts-expect-error Ignore this error
    quartzIconWebps[`../assets/quartz-icon/${quartzIconName}.webp`].default
  )
}

export const getElementIconUrl = (
  elementType: ElementType,
  languageCode: LanguageCode,
) => {
  const elementIconWebps = import.meta.glob('../assets/element-icon/*.webp', {
    eager: true,
    query: '?url',
  })
  return elementIconWebps[
    `../assets/element-icon/${elementType.toLocaleLowerCase()}_${languageCode}.webp`
    //@ts-expect-error Ignore this error
  ].default
}

export const getLoadingImg = (language: LanguageCode) => {
  const loadingImgWebps = import.meta.glob('../assets/calculating/*.webp', {
    eager: true,
    query: '?url',
  })
  return loadingImgWebps[`../assets/calculating/calculating_${language}.webp`]
    .default
}
