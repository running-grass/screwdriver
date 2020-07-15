import Functor from "./Functor";
import Mapper from "./Mapper";

export interface Nested<A> {
    flatten(): Nested<A>;
}

export type Nest<A> = Nested<A | Nested<A>>

// interface Nesting<A extends Nested<A>> {
//     flatten(): Nest<A>;
// }

export abstract class Maybe<A> implements Functor<A>, Nested<A>, Nest<A>{
    abstract flatten(): Maybe<A>;
    abstract isJust: boolean;
    abstract isNothing: boolean;
    static of<A>(a: A): Maybe<A> {
        return a == null ? Nothing.of() : new Just(a);
    }

    abstract map<B>(mapper: Mapper<A, B>): Maybe<B>;

    'fantasy-land/map'<B>(mapper: Mapper<A, B>): Maybe<B> {
        return this.map(mapper);
    }
}

export class Just<A> extends Maybe<A>{
    flatten(): Maybe<A> {
        if (this.value instanceof Maybe) {
            return this.value.flatten()
        }

        return this
    }
    map<B>(mapper: Mapper<A, B>): Maybe<B> {
        return new Just(mapper(this.value))
    }
    isJust: boolean = true;
    isNothing: boolean = false;
    private value: A;
    constructor(a: A) {
        super();
        this.value = a;
    }

    static of<B>(x: B): Just<B> {
        return new Just(x)
    }

}

export class Nothing<A> extends Maybe<A> {
    flatten(): Maybe<A> {
        return this;
    }
    map<B>(mapper: Mapper<A, B>): Maybe<B> {
        return Nothing._nothing;
    }
    isJust: boolean = false;
    isNothing: boolean = true;
    private static _nothing = new Nothing<any>();
    static of<B>(): Nothing<B> {
        return this._nothing
    }

    private constructor() {
        super();
    }
}


export const just = Just.of;
export const nothing = Nothing.of.bind(Nothing);

// 定义接口
declare global {
    interface Array<T> extends Nest<T>, Nested<T> {
    }
}

// 附加函数
Array.prototype.flatten = function <A>(): Array<A> {
    return [];
    // return this.map(mapper);
};


let s: Nest<number> = [2, 3, 4, 5, [5, 6, [7, []]]]
// s.flatten()



// type Nest<T> = T | Nest<T>;
// export type RecursiveArr<T> = <T | RecursiveArr<T>>

// const s = [2, 4,[3,4, [4]]] 
