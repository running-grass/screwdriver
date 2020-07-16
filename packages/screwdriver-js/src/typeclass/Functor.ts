import { Mapper } from "..";

export interface CommonFunctor<A> {
  map<B>(mapper: Mapper<A, B>): Functor<B>;
}
export interface FantasyFunctor<A> {
  'fantasy-land/map'<B>(mapper: Mapper<A, B>): Functor<B>;
}
export interface Functor<A> extends
  CommonFunctor<A>,
  FantasyFunctor<A> {
}

export function map<A, B>(mapper: Mapper<A, B>, fa: Functor<A>): Functor<B> {
  return fa.map(mapper);
}



export default Functor;



// 定义接口
declare global {
  interface Array<T> extends Functor<T> {
    map<U>(mapper: Mapper<T, U>): Array<U>;
    'fantasy-land/map'<U>(mapper: Mapper<T, U>): Array<U>;
  }
}

// 附加函数
Array.prototype['fantasy-land/map'] = function <A, B>(mapper: Mapper<A, B>): Array<B> {
  return this.map(mapper);
};
