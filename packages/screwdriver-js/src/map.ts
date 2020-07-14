import { Mapper } from "./fantasy/Mapper";
import { Functor } from "./fantasy/Functor";

export function map<A, B>(mapper: Mapper<A, B>, fa: Functor<A>): Functor<B> {
    return fa.map(mapper);
}


export default map;