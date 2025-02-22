import {Next} from '../Iteration/Next'
import {Prepend} from './Prepend'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from '../Number/Number'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {List} from './List'

/**
 * @hidden
 */
type _Repeat<N extends Number, A, T extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Repeat<N, A, Prepend<T, A>, Next<I>>
    1: T
}[
    N extends Key<I>
    ? 1
    : 0
]

/** Fill a [[List]] with **`N`** times **`A`**
 * @param A to fill with
 * @param N to repeat it
 * @param T (?=`[]`) to be filled
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Repeat<A extends any, N extends Number, T extends List = []> =
    _Repeat<N, A, T> extends infer X
    ? Cast<X, List>
    : never
