import './naitve';

export {
  default as add,
  inc,
  dec,
} from './add';

export {
  transduce,
} from './transducers/transduce'
export {
  Transformer,
} from './transducers/Transformer'
export {
  xwrap,
} from './transducers/XWrap';
export {
  xmap,
} from './transducers/XMap';
export {
  xfilter
} from './transducers/XFilter'
export {
  xtap,
  xlog,
} from './transducers/XTap'
export {
  xtake,
} from './transducers/XTake'

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
