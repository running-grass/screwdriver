import { Reducer, Mapper } from "..";
import { id } from "../typeclass/Category";
import { Provider } from "./Provider";
import { Transformer } from "./Transformer";

export abstract class XBase<A, B, C> implements Transformer<A, C> {
  xf: Transformer<B, C>;
  abstract '@@transducer/step': Reducer<A, C>;

  '@@transducer/result': Mapper<any, any> = id;
  '@@transducer/init': Provider<any> = () => {
    throw new Error("没有定义init函数");
  };
  constructor(xf: Transformer<B, C>) {
    this.xf = xf;
  };
}
