import { Container } from './Container';
// 有限容器
export interface FiniteContainer<A> extends Container<A> {
    // 返回当前容器内的元素个数
    size(): number;
    toArray(): Array<A>;
}

export default FiniteContainer;