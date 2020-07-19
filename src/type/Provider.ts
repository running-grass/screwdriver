export interface Provider<A> extends Function {
  (): A;
}
