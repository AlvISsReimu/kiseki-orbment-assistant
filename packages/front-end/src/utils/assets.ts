import type { ElementType } from '@shared/enums/elementType'
import type { LanguageCode } from '@shared/enums/languageCode'

export const getElementIcon = (
  element: ElementType,
  language: LanguageCode,
) => {
  return `src/assets/element-icon/${element.toLowerCase()}_${language}.webp`
}
