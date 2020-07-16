import { Mapper, Collection } from "..";

// 列表的接口
export interface List<A> extends Collection<A> {
  get(idx: number): A;
}

abstract class AbstractList<A> implements List<A> {
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