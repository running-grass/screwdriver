import { AbstractFunctor } from '../fantasy/Functor';
import Mapper from '../fantasy/Mapper';
import { List } from './List';
import { AbstractList } from './AbstractList';

export class ArrayList<A> extends AbstractList<A> {
    // 使用数组来存储List的数据
    private _data: Array<A> = [];

    // 外部能使用到的几率很小，作为内部实现来隐藏
    private constructor(array: A[]) {
        super();
        this._data = array;
    }

    static fromArray<T>(array: Array<T>): ArrayList<T> {
        return new ArrayList(array);
    }

    size(): number {
        return this._data.length;
    }
    add(item: A): List<A> {
        return ArrayList.fromArray([...this._data, item]);
    }

    get(idx: number): A {
        let a: A = this._data[idx];
        return a;
    }

    map<B>(mapper: Mapper<A, B>): ArrayList<B> {
        const newArr = this._data.map(mapper);
        return ArrayList.fromArray(newArr);
    }

    toArray(): Array<A> {
        return this._data;
    }
}

export default ArrayList;