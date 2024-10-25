import { ElementType } from '@shared/enums/elementType'
import { LanguageCode } from '@shared/enums/languageCode'

export class Element {
  elementType: ElementType
  name_i18n: { [key: string]: string }
}

export const getNameByElementType = (
  elementType: ElementType,
  languageCode: LanguageCode,
): string => {
  return ALL_ELEMENTS.find(element => element.elementType === elementType)
    ?.name_i18n[languageCode]
}

export const ALL_ELEMENTS: Element[] = [
  {
    elementType: ElementType.Earth,
    name_i18n: {
      [LanguageCode.ZH_CN]: '地',
      [LanguageCode.JA]: '地',
      [LanguageCode.EN]: 'Earth',
    },
  },
  {
    elementType: ElementType.Water,
    name_i18n: {
      [LanguageCode.ZH_CN]: '水',
      [LanguageCode.JA]: '水',
      [LanguageCode.EN]: 'Water',
    },
  },
  {
    elementType: ElementType.Fire,
    name_i18n: {
      [LanguageCode.ZH_CN]: '火',
      [LanguageCode.JA]: '火',
      [LanguageCode.EN]: 'Fire',
    },
  },
  {
    elementType: ElementType.Wind,
    name_i18n: {
      [LanguageCode.ZH_CN]: '风',
      [LanguageCode.JA]: '風',
      [LanguageCode.EN]: 'Wind',
    },
  },
  {
    elementType: ElementType.Time,
    name_i18n: {
      [LanguageCode.ZH_CN]: '时',
      [LanguageCode.JA]: '時',
      [LanguageCode.EN]: 'Time',
    },
  },
  {
    elementType: ElementType.Space,
    name_i18n: {
      [LanguageCode.ZH_CN]: '空',
      [LanguageCode.JA]: '空',
      [LanguageCode.EN]: 'Space',
    },
  },
  {
    elementType: ElementType.Mirage,
    name_i18n: {
      [LanguageCode.ZH_CN]: '幻',
      [LanguageCode.JA]: '幻',
      [LanguageCode.EN]: 'Mirage',
    },
  },
] as Element[]
