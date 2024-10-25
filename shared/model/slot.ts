import { ElementType } from '../enums/elementType.js'
import type { QuartzId } from './quartz'

export class ElementLimitedSlot {
  elementType: ElementType
  /*
   * The index of the slot in the line. Starts from 0.
   */
  position: number
  /*
   * The quartz id that is currently in this slot.
   */
  quartzId?: QuartzId

  constructor(elementType: ElementType, position: number, quartzId?: QuartzId) {
    this.elementType = elementType
    this.position = position
    this.quartzId = quartzId
  }

  deepCopy(): ElementLimitedSlot {
    return new ElementLimitedSlot(
      this.elementType,
      this.position,
      this.quartzId,
    )
  }
}

/**
 * Return a new element limited slot that has no quartz.
 * @param element
 * @param position
 * @returns
 */
export const createElementLimitedSlot = (
  elementType: ElementType,
  position: number,
): ElementLimitedSlot => {
  return new ElementLimitedSlot(elementType, position)
}
