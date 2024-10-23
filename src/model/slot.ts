import { Element } from '../enums/element.js'

export class ElementLimitedSlot {
  element: Element
  position: number
  quartzId?: number

  constructor(element: Element, position: number, quartzId?: number) {
    this.element = element
    this.position = position
    this.quartzId = quartzId
  }

  deepCopy(): ElementLimitedSlot {
    return new ElementLimitedSlot(this.element, this.position, this.quartzId)
  }
}

export const createElementLimitedSlot = (
  element: Element,
  position: number,
): ElementLimitedSlot => {
  return new ElementLimitedSlot(element, position)
}
