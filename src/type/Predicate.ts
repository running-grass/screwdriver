export interface Predicate<A> extends Function {
  (a: A): boolean
}