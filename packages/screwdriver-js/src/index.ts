import './naitve';

export {
  default as add,
  inc,
  dec,
} from './add';

export {
  transduce,
} from './transducer/transduce'
export {
  xmap,
} from './transducer/XMap';
export {
  xwrap,
} from './transducer/XWrap';

export {
  flatten,
  Flattenable,
} from './typeclass/Flattenable';

export {
  map,
  Functor,
} from './typeclass/Functor';

export {
  Apply,
  ap,
} from './typeclass/Apply'

export {
  Applicative,
} from './typeclass/Applicative'

export {
  Semigroupoid,
  compose,
} from './typeclass/Semigroupoid'

export {
  Category,
  id,
} from './typeclass/Category'

export {
  Semigroup,
  concat,
} from './typeclass/Semigroup'

export {
  Monoid,
  empty,
} from './typeclass/Monoid'

export {
  Group,
  invert,
} from './typeclass/Group'

export {
  Foldable,
  reduce,
} from './typeclass/Foldable'

// ----------------- 类 -------------------

export {
  Mapper,
} from './type/Mapper'

export {
  Reducer,
} from './type/Reducer'

export {
  Maybe,
  maybe,
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
