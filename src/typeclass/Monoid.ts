import { Semigroup } from "..";

/**
 * @category Fantasy-Land
 */
export interface FantasyMonoid<A> {
  /**
   * @category Fantasy-Land
   */
  'fantasy-land/empty'(): FantasyMonoid<A>;
}
/**
 * @category 类型类
 */
export interface Monoid<A> extends Semigroup<A>, FantasyMonoid<A> {
  empty(): Monoid<A>;
}
/**
 * @category 常用函数
 */
export function empty<A>(monoid: Monoid<A>): Monoid<A> {
  return monoid.empty();
}