import Collection from "./Collection";
import Mapper from "../fantasy/Mapper";

export interface Linked<A> extends Collection<A> {
    getHead(): SingleLinkedNode<A>;
    addHead(item: A): Linked<A>;
    addLast(item: A): Linked<A>;
}

export interface LinkedNode<A> {
    getData(): A;
    getNext(): LinkedNode<A>;
}

class SingleLinkedNode<A> implements LinkedNode<A>{
    data: A;
    next?: SingleLinkedNode<A>;

    constructor(data: A, next?: SingleLinkedNode<A>) {
        this.data = data;
        this.next = next || undefined;
    }

    getData(): A {
        return this.data;
    }

    getNext(): SingleLinkedNode<A> {
        return this.next;
    }
}

abstract class AbstractLinked<A> implements Linked<A> {
    abstract addHead(item: A): Linked<A>;
    add(item: A): Linked<A> {
        return this.addLast(item)
    }
    abstract addLast(item: A): Linked<A>;
    abstract map<B>(mapper: Mapper<A, B>): Linked<B>;

    protected _size: number = 0;
    protected _headNode: SingleLinkedNode<A>;
    protected _lastNode: SingleLinkedNode<A>;

    size(): number {
        return this._size;
    }

    getHead(): SingleLinkedNode<A> {
        return this._headNode;
    }


    'fantasy-land/map'<B>(mapper: Mapper<A, B>): Linked<B> {
        return this.map(mapper);
    }


    // 抽象类中的粗劣实现，具体类重新实现覆盖一次
    toArray(): Array<A> {
        let node = this.getHead()
        if (!node) {
            return [];
        }

        const arr: Array<A> = [];
        do {
            arr.push(node.data);

            node = node.getNext();
        } while (!!node)

        return arr;
    }
}

export class SingleLinked<A> extends AbstractLinked<A>{
    private constructor(node: SingleLinkedNode<A>, last: SingleLinkedNode<A>, size: number) {
        super();
        this._headNode = node;
        this._lastNode = last;
        this._size = size;
    }

    static fromArray<T>(array: Array<T>): SingleLinked<T> {
        let headNode: SingleLinkedNode<T>,
            lastNode: SingleLinkedNode<T>;

        const size = array.length;
        for (let idx = size - 1; idx >= 0; idx--) {
            const data = array[idx];

            const currNode = new SingleLinkedNode(data, headNode);

            headNode = currNode;

            if (idx == size - 1) {
                lastNode = currNode;
            }
        }

        return new SingleLinked(headNode, lastNode, size);
    }

    // Linked接口
    addLast(item: A): Linked<A> {
        const arr: Array<A> = this.toArray();
        arr.push(item);
        return SingleLinked.fromArray(arr);
    }

    addHead(item: A): Linked<A> {
        const currNode: SingleLinkedNode<A> = new SingleLinkedNode(item, this._headNode);
        return new SingleLinked(currNode, this._lastNode, this._size + 1);
    }

    map<B>(mapper: Mapper<A, B>): SingleLinked<B> {
        const arr = this.toArray();
        const arr1 = arr.map(mapper);
        return SingleLinked.fromArray(arr1);
    }
}

export default SingleLinked;