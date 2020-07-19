import { XBase } from "./XBase";
import { Predicate } from "../type/Predicate";
import { Reducer, Transformer } from "..";
import { Transducer } from "./Transducer";
import { Consumer } from "../type/Consumer";

export class XTap<A, C> extends XBase<A, A, C> {
  readonly tapFn: Consumer<A>;
  '@@transducer/step' = (acc: C, item: A) => {
    this.tapFn(item);

    return this.xf["@@transducer/step"](acc, item)
  };

  constructor(tapFn: Consumer<A>, xf: Transformer<A, C>) {
    super(xf);
    this.tapFn = tapFn;
  }
}


export const xtap = function <A, C>(tapFn: Consumer<A>): Transducer<A, A, C> {
  return function (xf: Transformer<A, C>): Transformer<A, C> {
    return new XTap(tapFn, xf);
  };
};

export const xlog = xtap(console.log);