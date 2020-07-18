import { XBase } from "./XBase";
import { Predicate } from "../type/Predicate";
import { Reducer, Transformer } from "..";
import { Transducer } from "./Transducer";

export class XFilter<A, C> extends XBase<A, A, C> {
  readonly predicate: Predicate<A>;
  '@@transducer/step': Reducer<A, C> = (acc: C, item: A): C => {
    return (this.predicate(item))
      ? this.xf["@@transducer/step"](acc, item)
      : acc;
  };

  constructor(predicate: Predicate<A>, xf: Transformer<A, C>) {
    super(xf);
    this.predicate = predicate;
  }
}


export const xfilter = function <A, C>(predicate: Predicate<A>): Transducer<A, A, C> {
  return function (xf: Transformer<A, C>): Transformer<A, C> {
    return new XFilter(predicate, xf);
  };
};