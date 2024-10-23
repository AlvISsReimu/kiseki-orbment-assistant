import { Element } from "./element.js";

export class ElementLimitedSlot {
  element: Element;
  quartzId: number | null;
  constructor(element: Element, quartzId: number | null) {
    this.element = element;
    this.quartzId = quartzId;
  }

  deepCopy(): ElementLimitedSlot {
    return new ElementLimitedSlot(this.element, this.quartzId);
  }
}

export const createElementLimitedSlot = (
  element: Element
): ElementLimitedSlot => {
  return new ElementLimitedSlot(element, null);
};
