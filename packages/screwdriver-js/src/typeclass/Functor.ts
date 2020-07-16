import { Mapper } from "..";

/**
 * Functor最通用的函数命名
 * @template A 
 * @category 类型类
 */
export interface CommonFunctor<A> {
  map<B>(mapper: Mapper<A, B>): Functor<B>;
}

/**
 * Fantasy functor
 * @template A 
 * @category Fantasy-Land
 */
export interface FantasyFunctor<A> {
  'fantasy-land/map'<B>(mapper: Mapper<A, B>): Functor<B>;
}

/**
 * Functor函子，最基础也是最实用的一个类型类
 * 同时兼容多个命名规范的函子
 * 
 * @template A 
 * @category 类型类
 */
export interface Functor<A> extends
  CommonFunctor<A>,
  FantasyFunctor<A> {
}


/**
 * map
 * @param mapper 函数 a -> b
 * @param fa 
 * 
 * @category 常用函数
 */
export function map<A, B>(mapper: Mapper<A, B>, fa: Functor<A>): Functor<B> {
  return fa.map(mapper);
}