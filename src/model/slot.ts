import { Element } from '../enums/element.js'
import type { QuartzId } from './quartz'

export class ElementLimitedSlot {
  element: Element
  /*
   * The index of the slot in the line. Starts from 0.
   */
  position: number
  /*
   * The quartz id that is currently in this slot.
   */
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

/**
 * Return a new element limited slot that has no quartz.
 * @param element
 * @param position
 * @returns
 */
export const createElementLimitedSlot = (
  element: Element,
  position: number,
): ElementLimitedSlot => {
  return new ElementLimitedSlot(element, position)
}
