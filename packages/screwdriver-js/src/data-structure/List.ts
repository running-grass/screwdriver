import { Collection } from './Collection';
// 列表的接口
export interface List<A> extends Collection<A> {
    get(idx: number): A;
}

export default List;