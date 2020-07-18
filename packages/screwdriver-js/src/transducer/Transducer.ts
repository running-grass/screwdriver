import { Mapper } from "..";
import { Transformer } from "./Transformer";
import { Semigroupoid } from "../typeclass/Semigroupoid";

export interface Transducer<A, B, C> extends
  Mapper<Transformer<B, C>, Transformer<A, C>>,
  Function {
  (xf: Transformer<B, C>): Transformer<A, C>;
}
