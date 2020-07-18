import { Transducer } from "./Transducer";
import { Transformer } from './Transformer'
import { Reducer, Foldable, xwrap } from "..";
import { XWrap } from "./XWrap";

export function transduce<A, B, C>(xd: Transducer<A, B, C>, reducer: Reducer<B, C> | XWrap<B, C>, initVal: C, list: Foldable<A>) {
  const xf = reducer instanceof XWrap ? reducer : xwrap(reducer);

  return arrayReduce(xd(xf), initVal, list as [A]);
}

function arrayReduce<A, C>(xf: Transformer<A, C>, acc: C, list: Array<A>): C {
  for (const item of list) {
    acc = xf['@@transducer/step'](acc, item);
  }

  return xf['@@transducer/result'](acc);
}
