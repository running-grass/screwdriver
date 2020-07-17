import { Apply } from "..";

/**
 * @category Fantasy-Land
 */
export interface FantasyApplicative<A> {
  /**
   * @category Fantasy-Land
   */
  'fantasy-land/of'(a: A): FantasyApplicative<A>;
}

/**
 * 把一个值包装进Applicative
 * @category 类型类
 */
export interface Applicative<A> extends
  Apply<A>,
  FantasyApplicative<A> {
  /**
   * 把一个值包装进Applicative
   */
  of(a: A): Applicative<A>;
}