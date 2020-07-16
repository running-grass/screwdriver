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

// 定义接口
declare global {
  interface Array<T> extends Functor<T> {
    map<U>(mapper: Mapper<T, U>): Array<U>;
    'fantasy-land/map'<U>(mapper: Mapper<T, U>): Array<U>;
  }
}

// 附加函数
Array.prototype['fantasy-land/map'] = function <A, B>(mapper: Mapper<A, B>): Array<B> {
  return this.map(mapper);
};
