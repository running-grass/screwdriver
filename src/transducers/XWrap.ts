import { Reducer, Mapper } from "..";
import { id } from "../typeclass/Category";
import { Provider } from "../type/Provider";
import { Transformer } from "./Transformer";
// type xfOrFn<A, B> = XBase<A, B> | Reducer<A, B>
/**
 * Xwrap 是用来封装Reducer的xf
 * @template A
 * @template B
 */

export class XWrap<A, C> implements Transformer<A, C> {
  reducer: Reducer<A, C>;

  constructor(reducer: Reducer<A, C>) {
    this.reducer = reducer;
  }
  '@@transducer/init': Provider<C> = () => {
    throw new Error("未提供init");

  };
  '@@transducer/result': Mapper<any, any> = id;

  '@@transducer/step': Reducer<A, C> = (acc: C, item: A): C => {
    return this.reducer(acc, item);
  };
}


export const xwrap = function <A, C>(reducer: Reducer<A, C>): Transformer<A, C> {
  return new XWrap(reducer);
};
