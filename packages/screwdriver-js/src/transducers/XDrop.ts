import { XBase } from "./XBase";
import { Transformer } from "..";
import { Transducer } from "./Transducer";

export class XDrop<A, C> extends XBase<A, A, C> {
  readonly dropTotal: number;
  dropCount: number = 0;

  '@@transducer/step' = (acc: C, item: A) => {

    if (this.isDropOver()) {
      return this.xf["@@transducer/step"](acc, item)
    } else {
      this.dropCount++;
      return acc;
    }
  };

  constructor(dropTotal: number, xf: Transformer<A, C>) {
    super(xf);
    this.dropTotal = dropTotal;
  }

  isDropOver() {
    return this.dropTotal <= 0 || this.dropCount >= this.dropTotal
  }
}


export const xdrop = function <A, C>(dropTotal: number): Transducer<A, A, C> {
  return function (xf: Transformer<A, C>): Transformer<A, C> {
    return new XDrop(dropTotal, xf);
  };
};