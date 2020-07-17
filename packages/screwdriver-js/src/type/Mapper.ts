/**
 * 简单的映射函数
 * 
 * @template A 
 * @template B 
 * 
 * @category 函数类型
 */
export interface Mapper<A, B> extends Function{
    (a: A): B;
};