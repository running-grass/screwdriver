import { Mapper } from "..";

/**
 * Fantasy functor
 * @category Fantasy-Land
 */
export interface FantasyFunctor<A> {
  /**
   * @category Fantasy-Land
   */
  'fantasy-land/map'<B>(mapper: Mapper<A, B>): Functor<B>;
}

/**
 * Functor函子，最基础也是最实用的一个类型类
 * 同时兼容多个命名规范的函子
 * 
 * @template A 
 * @category 类型类
 */
export interface Functor<A> extends FantasyFunctor<A> {
  /**
   * @category Self
   */
  map<B>(mapper: Mapper<A, B>): Functor<B>;
}


/**
 * @category 常用函数
 */
export function map<A, B>(mapper: Mapper<A, B>, fa: Functor<A>): Functor<B> {
  return fa.map(mapper);
}