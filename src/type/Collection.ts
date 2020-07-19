import { Functor } from '..';

// 容器类，可以放一堆同样类型的数据
export interface Container<A> extends Functor<A> {
}

// 有限容器
export interface FiniteContainer<A> extends Container<A> {
    // 返回当前容器内的元素个数
    size(): number;
    toArray(): Array<A>;
}

// 收集器，简单的放置容器内的数据
export interface Collection<A> extends FiniteContainer<A> {
    // 不用指定方式，直接添加
    add(item: A): Collection<A>;
}

export default Collection;