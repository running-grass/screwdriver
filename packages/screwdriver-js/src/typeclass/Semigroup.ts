/**
 * @category Fantasy-Land
 */
export interface FatasySemigroup<A> {
  /**
   * @category Fantasy-Land
   */
  'fantasy-land/concat'(fsg: FatasySemigroup<A>): FatasySemigroup<A>;
}
/**
 * @category 类型类
 */
export interface Semigroup<A> {
  concat(sg: Semigroup<A>): Semigroup<A>;
}
/**
 * @category 常用函数
 */
export function concat<A>(sg1: Semigroup<A>, sg2: Semigroup<A>) {
  return sg1.concat(sg2);
}