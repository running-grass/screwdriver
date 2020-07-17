import { Reducer } from "..";

export interface FantasyFoldable<A> {
  'fantasy-land/reduce'<B>(reducer: Reducer<B, A>, initVal: B): B
}

export interface Foldable<A> extends FantasyFoldable<A> {
  reduce<B>(reducer: Reducer<B, A>, initVal: B): B
}

export function reduce<A, B>(reducer: Reducer<B, A>, initVal: B, foldable: Foldable<A>): B {
  return foldable.reduce(reducer, initVal);
}