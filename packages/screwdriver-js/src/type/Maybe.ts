import { Functor, Mapper, Flattenable, Apply, Applicative } from "..";

/**
 * Maybe代表一种可能性，可有可无
 * 
 * 他有两种状态，一种是Nothing，类比于js中的null 
 * 
 * 另外一种是Just，里面包装这一个值
 * 
 * @category 数据类型
 */
export abstract class Maybe<A> implements
  Functor<A>,
  Apply<A>,
  Applicative<A>,
  Flattenable<A> {
  /**
   * 是否是Just
   */
  readonly isJust: boolean;
  /**
   * 是否是Nothing
   */
  readonly isNothing: boolean;

  // --------------- extends
  // Functor
  abstract map<B>(mapper: Mapper<A, B>): Maybe<B>;
  'fantasy-land/map'<B>(mapper: Mapper<A, B>): Maybe<B> {
    return this.map(mapper);
  }
  // Apply
  abstract ap<B>(fmapper: Maybe<Mapper<A, B>>): Maybe<B>;
  'fantasy-land/ap'<B>(fmapper: Maybe<Mapper<A, B>>): Maybe<B> {

    return this.ap(fmapper);
  };
  // Applicative
  abstract of(a: A): Maybe<A>
  'fantasy-land/of'(a: A): Maybe<A> {
    return this.of(a)
  }
  static of<T>(a: T): Maybe<T> {
    return a == null || a == undefined ? Nothing.of() : Just.of(a);
  }
  static 'fantasy-land/of'<T>(a: T): Maybe<T> {
    return Maybe.of(a);
  }

  // Flattenable
  abstract flatten(): Maybe<A>;
}

/**
 * Just是有值的一种Maybe状态
 * @category 数据类型构造器
 */
export class Just<A> extends Maybe<A> {
  isJust: boolean = true;
  isNothing: boolean = false;
  /**
   * Just内部存储值的变量
   */
  private _value: A;

  constructor(a: A) {
    super()
    this._value = a;
  }

  of(a: A): Just<A> {
    return new Just(a);
  }
  static of<B>(x: B): Just<B> {
    return new Just(x);
  }
  static 'fantasy-land/of'<B>(x: B): Just<B> {
    return Just.of(x);
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
    return Maybe.of(mapper(this._value));
  }

  ap<B>(fmapper: Maybe<Mapper<A, B>>): Maybe<B> {
    if (fmapper.isNothing) {
      return Nothing.of();
    } 

    const justMapper = fmapper as Just<Mapper<A, B>>;
    return Maybe.of(justMapper._value(this._value));
  }
}

/**
 * Nothing是Maybe的没有值得状态
 * @category 数据类型构造器
 */
export class Nothing<A> extends Maybe<A> {
  isJust: boolean = false;
  isNothing: boolean = true;

  /**
   * 单例模式的Nothing
   */
  private static _nothing = new Nothing<any>();

  private constructor() {
    super()
  }


  of(a: A): Nothing<A> {
    return Nothing._nothing;
  }
  static of<B>(b?: B): Nothing<B> {
    return Nothing._nothing;
  }
  static 'fantasy-land/of'<B>(b?: B): Nothing<B> {
    return Nothing.of(b);
  }

  flatten(): Nothing<A> {
    return Nothing._nothing;
  }

  map<B>(mapper: Mapper<A, B>): Nothing<B> {
    return Nothing._nothing;
  }

  ap<B>(fmapper: Nothing<Mapper<A, B>>): Nothing<B> {
    return Nothing._nothing;
  }

}


/**
 * Just的构造函数
 * @category 类型构造函数
 */
export const just = Just.of;

/**
 * Nothing的构造函数 
 * @category 类型构造函数
 */
export const nothing = Nothing.of;


/**
 * 自动判断的Maybe构造函数
 * @category 类型构造函数
 */
export const maybe = Maybe.of;