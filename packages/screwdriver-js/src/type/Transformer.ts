import { Reducer, Mapper } from ".."
import { id } from "../typeclass/Category"
import { Foldable } from "../typeclass/Foldable";
import { map, Functor } from "../typeclass/Functor";

interface Provider<A> extends Function {
  (): A
}

export interface Transformer<A, C> {
  '@@transducer/init': Provider<C>
  '@@transducer/step': Reducer<A, C>;
  '@@transducer/result': Mapper<any, any>;
}

export class XReduced<C> {
  '@@transducer/reduced': boolean = true;
  '@@transducer/value': C;

  constructor(val: C) {
    this["@@transducer/value"] = val;
  }
}


export abstract class XBase<A, B, C> implements Transformer<A, C>{
  xf: Transformer<B, C>;
  abstract '@@transducer/step': Reducer<A, C>;

  '@@transducer/result': Mapper<any, any> = id;
  '@@transducer/init': Provider<any> = () => {
    throw new Error("没有定义init函数");
  }
  constructor(xf: Transformer<B, C>) {
    this.xf = xf;
  };
}

// type xfOrFn<A, B> = XBase<A, B> | Reducer<A, B>


/**
 * Xwrap 是用来封装Reducer的xf
 * @template A 
 * @template B 
 */
export class XWrap<A, C> implements Transformer<A, C> {
  reducer: Reducer<A, C>

  constructor(reducer: Reducer<A, C>) {
    this.reducer = reducer;
  }
  '@@transducer/init': Provider<C> = () => {
    throw new Error("未提供init");

  };
  '@@transducer/result': Mapper<any, any> = id;

  '@@transducer/step': Reducer<A, C> = (acc: C, item: A): C => {
    return this.reducer(acc, item);
  }
}


export class XMap<A, B, C> extends XBase<A, B, C> {
  readonly mapper: Mapper<A, B>
  '@@transducer/step': Reducer<A, C> = (acc: C, item: A): C => {
    return this.xf["@@transducer/step"](acc, this.mapper(item));
  };

  constructor(mapper: Mapper<A, B>, xf: Transformer<B, C>) {
    super(xf);
    this.mapper = mapper;
  }
}


export const xmap = function <A, B, C>(mapper: Mapper<A, B>): Transducer<A, B, C> {
  return function (xf: Transformer<B, C>): Transformer<A, C> {
    return new XMap(mapper, xf);
  }
};

export const xwrap = function <A, C>(reducer: Reducer<A, C>): Transformer<A, C> {
  return new XWrap(reducer);
}


export interface Transducer<A, B, C> extends
  Mapper<Transformer<B, C>, Transformer<A, C>>,
  Function {
  (xf: Transformer<B, C>): Transformer<A, C>;
}


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