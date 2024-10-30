import type { ElementType } from '@shared/enums/elementType'
import type { LanguageCode } from '@shared/enums/languageCode'
import { useEffect } from 'react'
import { getElementIconUrl } from '../utils/assets'

export const ElementIconComponent = (props: {
  elementType: ElementType
  languageCode: LanguageCode
}) => {
  useEffect(() => {
    console.log(props.elementType, props.languageCode)
  }, [props.elementType, props.languageCode])
  return <img src={getElementIconUrl(props.elementType, props.languageCode)} />
}
