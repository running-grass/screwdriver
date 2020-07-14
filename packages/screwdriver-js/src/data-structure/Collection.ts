import { FiniteContainer } from './FiniteContainer';
// 收集器，简单的放置容器内的数据
export interface Collection<A> extends FiniteContainer<A> {
    // 不用指定方式，直接添加
    add(item: A): Collection<A>;
}

export default Collection;