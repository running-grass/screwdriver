import { Reducer, Mapper } from "..";
import { Provider } from "../type/Provider";
import { XReduced } from "./XReduced";

export interface Transformer<A, C> {
  '@@transducer/init': Provider<C>;
  '@@transducer/step': Reducer<A, C | XReduced<C>>;
  '@@transducer/result': Mapper<any, any>;
}
