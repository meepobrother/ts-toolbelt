import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../List/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Index} from '../Any/Index'
import {List} from '../List/List'

/**
 * @hidden
 */
type _PathUp<O, Path extends List<Index>, I extends Iteration = IterationOf<'0'>> = {
    0: O extends unknown
       ? At<O & {}, Path[Pos<I>]> extends infer OK
         ? _PathUp<UNonNullable<OK>, Path, Next<I>>
         : never
       : never
    1: O // Use of `NonNullable` otherwise path cannot be followed #`undefined`
}[
    Pos<I> extends Length<Path>
    ? 1 // Stops before going too deep (last key) & check if it has it
    : 0 // Continue iterating and go deeper within the object with `At`
]

/** Get in **`O`** the type of nested properties.
 * It is able to deal with nested [[Union]]s.
 * @param O to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type PathUp<O extends object, Path extends List<Index>> =
    _PathUp<O, Path> extends infer X
    ? Cast<X, any>
    : never
