import { Functor, FantasyFunctor } from "./Functor";
import { Mapper } from "..";

/**
 * Fantasy Apply
 * @category Fantasy-Land
 */
export interface FantasyApply<A> {
  /**
   * @category Fantasy-Land
   */
  'fantasy-land/ap'<B>(fmapper: FantasyApply<Mapper<A, B>>): FantasyApply<B>
}

/**
 * Apply，应用子。比函子复杂一小点。相当于把函子里面的映射函数封装了一层
 * @category 类型类
 */
export interface Apply<A> extends Functor<A>, FantasyApply<A> {
  /**
   * @category Self
   */
  ap<B>(fmapper: Apply<Mapper<A, B>>): Apply<B>
}

/**
 * @category 常用函数
 */
export function ap<A, B>(fmapper: Apply<Mapper<A, B>>, apply: Apply<A>): Apply<B> {
  return apply.ap(fmapper);
}