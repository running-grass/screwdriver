import {
  Functor,
  Flattenable,
  Mapper,
  Semigroupoid,
  Category,
  id,
  compose,
  map,
} from "..";

// 定义接口
declare global {
  /**
   * 
   * 对原生对象Array的扩展
   * @template T
   */
  interface Array<T> extends Functor<T>, Flattenable<T> {
    'fantasy-land/map'<B>(mapper: Mapper<T, B>): Array<B>;
    map<B>(mapper: Mapper<T, B>): Array<B>;
    flatten(): Array<T>;
  }

  interface Function extends Semigroupoid<any, any>, Category<any> {
    'fantasy-land/compose'(f: Function): Function;
    compose(f: Function): Function;
    'fantasy-land/id'(): Mapper<Function, Function>;
    id(): Mapper<Function, Function>;
  }
}

// 附加函数
Array.prototype['fantasy-land/map'] = function <A, B>(mapper: Mapper<A, B>): Array<B> {
  return this.map(mapper);
};
// 附加函数
Array.prototype.flatten = function <A>(): Array<A> {
  const res = [];
  for (const item of this) {
    if (item instanceof Array) {
      for (const it2 of item.flatten()) {
        res.push(it2)
      }
    } else {
      res.push(item)
    }

  }
  return res;
};


// Function
Function.prototype["fantasy-land/compose"] = function (f: Function): Function {
  return Function.compose(f);
}
Function.prototype.compose = function (f: Function): Function {
  return (x: any) => f(this(x));
}
Function.prototype.id = function (): Mapper<Function, Function> {
  return Function.id();
}
Function.prototype["fantasy-land/id"] = function (): Mapper<Function, Function> {
  return x => x
}