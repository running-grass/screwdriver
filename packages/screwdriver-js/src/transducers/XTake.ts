import { XBase } from "./XBase";
import { Predicate } from "../type/Predicate";
import { Reducer, Transformer } from "..";
import { Transducer } from "./Transducer";
import { xreduced, isXReduced } from "./XReduced";

export class XTake<A, C> extends XBase<A, A, C> {
  readonly takeWant: number;
  takeCount: number = 0;
  '@@transducer/step' = (acc: C, item: A) => {
    this.takeCount++;
    const ret = this.takeWant <= 0
      ? acc
      : this.xf['@@transducer/step'](acc, item);
    return this.takeOver() ? xreduced(ret as C) : ret;
  };

  constructor(takeWant: number, xf: Transformer<A, C>) {
    super(xf);
    this.takeWant = takeWant;
  }

  takeOver(): boolean {
    return this.takeCount >= this.takeWant;
  }
}


export const xtake = function <A, C>(takeWant: number): Transducer<A, A, C> {
  return function (xf: Transformer<A, C>): Transformer<A, C> {
    return new XTake(takeWant, xf);
  };
};