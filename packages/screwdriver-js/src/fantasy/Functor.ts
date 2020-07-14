import Mapper from "./Mapper";

export interface CommonFunctor<A> {
    map<A, B>(mapper: Mapper<A, B>): Functor<B>;
}
export interface FantasyFunctor<A> {
    'fantasy-land/map'<A, B>(mapper: Mapper<A, B>): Functor<B>;
}
export interface Functor<A> extends
    CommonFunctor<A>,
    FantasyFunctor<A> {
}

export abstract class AbstractFunctor<A> implements Functor<A>{
    abstract map<A, B>(mapper: Mapper<A, B>): Functor<B>;
    'fantasy-land/map'<A, B>(mapper: Mapper<A, B>): Functor<B> {
        return this.map(mapper);
    }
}


export default Functor;