import { Semigroupoid, Mapper } from "..";

/**
 * @category Fantasy-Land
 */
export interface FantasyCategory<A> {
  /**
   * @category Fantasy-Land
   */
  'fantasy-land/id'(): Mapper<FantasyCategory<A>, FantasyCategory<A>>
}

/** 
 * @category 类型类
 */
export interface Category<A> extends Semigroupoid<A, A>, FantasyCategory<A> {
  id(): Mapper<Category<A>, Category<A>>
}

export interface Identity<A> extends Mapper<A, A> {
  (x: A): A
}

/** 
 * 返回参数自身
 * @category 常用函数
 */
export const id: Identity<any> = <A>(x: A): A => {
  return x;
}