import { Reducer, Mapper } from "..";
import { Provider } from "../type/Provider";

export interface Transformer<A, C> {
  '@@transducer/init': Provider<C>;
  '@@transducer/step': Reducer<A, C>;
  '@@transducer/result': Mapper<any, any>;
}
