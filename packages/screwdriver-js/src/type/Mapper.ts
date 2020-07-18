/**
 * 简单的映射函数
 * 
 * 从类型A转换到类型B
 * 
 * @template A 
 * @template B 
 * 
 * @category 函数类型
 */
export interface Mapper<A, B> extends Function{
    (a: A): B;
};