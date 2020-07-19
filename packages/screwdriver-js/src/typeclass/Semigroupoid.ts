import { reduce } from "./Foldable";

/**
 * @category Fantasy-Land
 */
export interface FantasySemigroupoid<A, B> {
  /**
   * @category Fantasy-Land
   */
  'fantasy-land/compose'<C>(semigroupoid: FantasySemigroupoid<B, C>): FantasySemigroupoid<A, C>
}

/** 
 * @category 类型类
 */
export interface Semigroupoid<A, B> extends FantasySemigroupoid<A, B> {
  compose<C>(semigroupoid: Semigroupoid<B, C>): Semigroupoid<A, C>;
}

/** 
 * 可以提供函数的组合
 * @category 常用函数
 */
// export function compose<A, B, C>(f: Semigroupoid<B, C>, ...fns: Semigroupoid<any, any>[]): Semigroupoid<A, C> {
export function compose(f: any, ...fns: any[]): any {
  const fnLen = fns.length;
  if (fnLen === 0) {
    throw new Error("compose的参数至少为两个");
  }
  if (fnLen === 1) {
    let ret
    let init = fns[0];
    if (init.compose) {
      ret = init.compose(f)
    } else if (typeof f === 'function' && typeof init === 'function') {
      ret = (...x: any[]) => f(init(...x))
    } else {
      throw new Error("参数类型不能进行compose");
    }

    return ret
  }

  return reduce(compose, fns[0], fns.slice(1));
}


export function pipe<A, B, C>(f: Semigroupoid<A, B>, g: Semigroupoid<B, C>): Semigroupoid<A, C> {
  return f.compose(g);
}