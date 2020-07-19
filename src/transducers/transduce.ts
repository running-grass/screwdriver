import { Transducer } from "./Transducer";
import { Transformer } from './Transformer'
import { Reducer, Foldable, xwrap } from "..";
import { XWrap } from "./XWrap";
import { XReduced, isXReduced } from "./XReduced";

export function transduce<A, B, C>(xd: Transducer<A, B, C>, reducer: Reducer<B, C> | XWrap<B, C>, initVal: C, list: Foldable<A>) {
  const xf = reducer instanceof XWrap ? reducer : xwrap(reducer);

  return arrayReduce(xd(xf), initVal, list as [A]);
}

function arrayReduce<A, C>(xf: Transformer<A, C>, acc: C, list: Array<A>): C {

  let ret: C | XReduced<C> = acc
  for (const item of list) {
    ret = xf['@@transducer/step'](ret, item);

    if (isXReduced(ret)) {
      ret = (ret as XReduced<C>)["@@transducer/value"];
      break;
    }
  }

  return xf['@@transducer/result'](ret);
}
