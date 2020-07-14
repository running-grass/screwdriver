import Functor, { AbstractFunctor } from '../fantasy/Functor';
import Mapper from '../fantasy/Mapper';
export class List<A> extends AbstractFunctor<A> implements Functor<A> {
    private _data: Array<A> = [];
    constructor(array: A[]) {
        super();
        this._data = array;
    }
    static fromArray<T>(array: Array<T>): List<T> {
        return new List(array);
    }
    map<A, B>(mapper: Mapper<A, B>): List<B> {
        const newArr = this._data.map(mapper);
        return List.fromArray(newArr);
    }
}
