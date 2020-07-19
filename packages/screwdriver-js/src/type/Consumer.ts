export interface Consumer<A> extends Function {
  (a: A): void;
};