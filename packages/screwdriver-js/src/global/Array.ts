import Functor from '../fantasy/Functor';
import Mapper from '../fantasy/Mapper';

// 定义接口
declare global {
    interface Array<T> extends Functor<T> {
        map<T, U>(mapper: Mapper<T, U>): Array<U>;
        'fantasy-land/map'<T, U>(mapper: Mapper<T, U>): Array<U>;
    }
}

// 附加函数
Array.prototype['fantasy-land/map'] = function <A, B>(mapper: Mapper<A, B>): Array<B> {
    return this.map(mapper);
};
