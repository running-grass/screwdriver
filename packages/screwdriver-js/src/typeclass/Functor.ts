/**
 * Functor函子，最基础也是最实用的一个类型类
 * @category 类型类
 * @packageDocumentation
 */
import { Mapper } from "..";

/**
 * Common functor
 * @template A 
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
 * Functor
 * @template A 
 */
export interface Functor<A> extends
  CommonFunctor<A>,
  FantasyFunctor<A> {
}


/**
 * map
 * @param mapper 函数 a -> b
 * @param fa 
 */
export function map<A, B>(mapper: Mapper<A, B>, fa: Functor<A>): Functor<B> {
  return fa.map(mapper);
}

export default Functor;
