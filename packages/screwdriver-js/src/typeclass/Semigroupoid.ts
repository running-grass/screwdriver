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
  compose<C>(semigroupoid: Semigroupoid<B, C>): Semigroupoid<A, C>
}

/** 
 * 可以提供函数的组合
 * @category 常用函数
 */
export function compose<A, B, C>(f: Semigroupoid<B, C>, g: Semigroupoid<A, B>): Semigroupoid<A, C> {
  return g.compose(f);
}