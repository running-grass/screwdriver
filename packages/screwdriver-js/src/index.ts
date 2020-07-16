export { default as add } from './add';

export {
  flatten,
  Flattenable,
  // Nested,
} from './typeclass/Flattenable';

export {
  map,
  Functor,
} from './typeclass/Functor';


// 类

export {
  Mapper,
} from './type/Mapper'

export {
  Maybe,

  just,
  nothing,
} from './type/Maybe'

export {
  List,
  ArrayList
} from './type/ArrayList'

export {
  Linked,
  SingleLinked
} from './type/SingleLinked'

export {
  Container,
  FiniteContainer,
  Collection
} from './type/Collection'