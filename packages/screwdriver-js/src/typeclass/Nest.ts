
export interface Nested<A> {
    flatten(): Nested<A>;
}

export type Nest<A> = Nested<A | Nested<A>>

// 目前借用实例对象的具体函数实现
// TODO 需要使用#5增强
export function flatten<A>(nest: Nest<A>) {
  return nest.flatten();
}

// ----------------- 为原生对象提供实现 ------------------

// ------------- Array ------------- 
declare global {
    interface Array<T> extends Nest<T>, Nested<T> {
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
