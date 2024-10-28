import type { ElementType } from '@shared/enums/elementType'
import type { LanguageCode } from '@shared/enums/languageCode'

export const ElementIconComponent = (props: {
  elementType: ElementType
  languageCode: LanguageCode
}) => {
  return <img src={getElementIconUrl(props.elementType, props.languageCode)} />
}

const getElementIconUrl = (
  elementType: ElementType,
  languageCode: LanguageCode,
) => {
  return `/element-icon/${elementType.toLocaleLowerCase()}_${languageCode}.webp`
}
