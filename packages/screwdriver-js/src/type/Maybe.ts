import { Functor, Mapper, Flattenable, Apply } from "..";



/**
 * Maybe代表一种可能性，可有可无
 * 
 * 他有两种状态，一种是Nothing，类比于js中的null 
 * 
 * 另外一种是Just，里面包装这一个值
 * 
 * @category 数据类型
 */
export interface Maybe<A> extends
  Functor<A>,
  Apply<A>,
  Flattenable<A> {
  /**
   * 是否是Just
   */
  isJust: boolean;
  /**
   * 是否是Nothing
   */
  isNothing: boolean;
}


/**
 * Just是有值的一种Maybe状态
 * @category 数据类型构造器
 */
export class Just<A> implements Maybe<A> {
  isJust: boolean = true;
  isNothing: boolean = false;
  /**
   * Just内部存储值的变量
   */
  private _value: A;

  constructor(a: A) {
    this._value = a;
  }

  flatten(): Maybe<A> {
    if (this._value instanceof Just) {
      return this._value.flatten();
    } else if (this._value instanceof Nothing) {
      return this._value;
    }
    return this;
  }
  map<B>(mapper: Mapper<A, B>): Maybe<B> {
    return new Just(mapper(this._value));
  }
  'fantasy-land/map'<B>(mapper: Mapper<A, B>): Maybe<B> {
    return this.map(mapper);
  }

  ap<B>(fmapper: Just<Mapper<A, B>>): Just<B> {
    return new Just(fmapper._value(this._value));
  }

  'fantasy-land/ap'<B>(fmapper: Just<Mapper<A, B>>): Just<B> {
    return this.ap(fmapper)
  }

  static of<B>(x: B): Just<B> {
    return new Just(x);
  }

}

/**
 * Nothing是Maybe的没有值得状态
 * @category 数据类型构造器
 */
export class Nothing<A> implements Maybe<A> {
  isJust: boolean = false;
  isNothing: boolean = true;

  /**
   * 单例模式的Nothing
   */
  private static _nothing = new Nothing<any>();

  private constructor() {
  }

  static of<B>(): Nothing<B> {
    return this._nothing;
  }

  flatten(): Maybe<A> {
    return Nothing._nothing;
  }

  map<B>(mapper: Mapper<A, B>): Maybe<B> {
    return Nothing._nothing;
  }


  'fantasy-land/map'<B>(mapper: Mapper<A, B>): Maybe<B> {
    return Nothing._nothing;
  }

  ap<B>(fmapper: Nothing<Mapper<A, B>>): Nothing<B> {
    return Nothing._nothing;
  }

  'fantasy-land/ap'<B>(fmapper: Nothing<Mapper<A, B>>): Nothing<B> {
    return Nothing._nothing;
  }

}


/**
 * Just的构造函数
 * @category 类型构造函数
 */
export const just = Just.of.bind(Just);

/**
 * Nothing的构造函数 
 * @category 类型构造函数
 */
export const nothing = Nothing.of.bind(Nothing);


/**
 * 自动判断的Maybe构造函数
 * @category 类型构造函数
 */
export function maybe<A>(a: A): Maybe<A> {
  return a == null ? Nothing.of() : new Just(a);
}