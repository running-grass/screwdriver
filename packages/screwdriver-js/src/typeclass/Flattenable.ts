import { Functor } from "..";

/**
 * 可以把自嵌套的结构压平
 * 
 * @template A 
 * @category 类型类
 */
export interface Flattenable<A> extends Functor<A>{
  /** 
   * @category Self
   */
  flatten(): Flattenable<A>;
}

// 目前借用实例对象的具体函数实现
// TODO 需要使用#5增强


/**
 * 把指定的数据扁平化处理
 * 
 * @param fa 例如多维数组等
 * 
 * @returns 例如，对于数组来说，返回一维数组
 * 
 * @category 常用函数
 */
export function flatten<A>(fa: Flattenable<A>) {
  return fa.flatten();
}
