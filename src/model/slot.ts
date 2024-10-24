import { Element } from '../enums/element.js'
import type { QuartzId } from './quartz'

export class ElementLimitedSlot {
  element: Element
  position: number
  quartzId?: QuartzId

  constructor(element: Element, position: number, quartzId?: QuartzId) {
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
