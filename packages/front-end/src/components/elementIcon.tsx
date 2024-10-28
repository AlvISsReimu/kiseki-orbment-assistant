import type { ElementType } from '@shared/enums/elementType'
import type { LanguageCode } from '@shared/enums/languageCode'
import { getElementIconUrl } from '../utils/assets'

export const ElementIconComponent = (props: {
  elementType: ElementType
  languageCode: LanguageCode
}) => {
  return <img src={getElementIconUrl(props.elementType, props.languageCode)} />
}
