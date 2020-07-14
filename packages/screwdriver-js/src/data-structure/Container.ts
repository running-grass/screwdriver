import Functor from '../fantasy/Functor';
// 容器类，可以放一堆同样类型的数据
export interface Container<A> extends Functor<A> {
}

export default Container;