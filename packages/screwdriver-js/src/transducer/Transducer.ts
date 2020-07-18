import { Mapper } from "..";
import { Transformer } from "./Transformer";

export interface Transducer<A, B, C> extends
  Mapper<Transformer<B, C>, Transformer<A, C>>,
  Function {
  (xf: Transformer<B, C>): Transformer<A, C>;
}
