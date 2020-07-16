import { Functor, Flattenable, Mapper } from "..";

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
