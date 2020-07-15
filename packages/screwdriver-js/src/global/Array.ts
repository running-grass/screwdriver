import Functor from '../fantasy/Functor';
import Mapper from '../fantasy/Mapper';
import { Nest, Nested } from '../fantasy/Nest';

// 定义接口
declare global {
    interface Array<T> extends Functor<T>, Nest<T>, Nested<T> {
        map<U>(mapper: Mapper<T, U>): Array<U>;
        'fantasy-land/map'<U>(mapper: Mapper<T, U>): Array<U>;
        flatten(): Array<T>;
    }
}

// 附加函数
Array.prototype['fantasy-land/map'] = function <A, B>(mapper: Mapper<A, B>): Array<B> {
    return this.map(mapper);
};

// 附加函数
Array.prototype.flatten = function <A>(): Array<A> {
    const res = [];
    for (const item of this) {
        if (item instanceof Array) {
            for (const it2 of item.flatten()) {
                res.push(it2)
            }
        } else {
            res.push(item)
        }

    }
    return res;
};
