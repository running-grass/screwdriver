import Mapper from '../fantasy/Mapper';
import { List } from './List';
import ArrayList from './ArrayList';
// 列表的抽象类，统一一些和具体实现无关的逻辑

export abstract class AbstractList<A> implements List<A> {
    abstract add(item: A): List<A>;
    abstract size(): number;
    abstract get(idx: number): A;


    abstract map<B>(mapper: Mapper<A, B>): List<B>;

    'fantasy-land/map'<B>(mapper: Mapper<A, B>): List<B> {
        return this.map(mapper);
    }


    // 抽象类中的粗劣实现，具体类重新实现覆盖一次
    toArray(): Array<A> {
        const arr: Array<A> = [];
        for (let idx = 0; idx < this.size(); idx++) {
            arr.push(this.get(idx));
        }
        return arr;
    }
}

export default AbstractList;