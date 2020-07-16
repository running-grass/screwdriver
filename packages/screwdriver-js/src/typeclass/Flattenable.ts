import Functor from "./Functor";

/**
 * 可以把自嵌套的结构压平
 * 
 * @category 自定义
 * @template A 
 */
export interface Flattenable<A> extends Functor<A>{
  flatten(): Flattenable<A>;
}

// 目前借用实例对象的具体函数实现
// TODO 需要使用#5增强


/**
 * 把指定的数据扁平化处理
 * 
 * @param fa 例如多维数组等
 * 
 * @returns 例如，对于数组来说，返回一维数组
 * 
 * @category 常用函数
 */
export function flatten<A>(fa: Flattenable<A>) {
  return fa.flatten();
}

// ----------------- 为原生对象提供实现 ------------------

// ------------- Array ------------- 
declare global {
  /**
   * Array for Fattenable
   * @template T 
   */
  interface Array<T> extends Flattenable<T> {
    flatten(): Array<T>;
  }
}

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
