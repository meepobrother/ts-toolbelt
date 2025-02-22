import {Concat} from './Concat'
import {List} from './List'

/** Add an element **`A`** at the end of **`T`**
 * @param T to append to
 * @param A to be added to
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Append<T extends List, A extends any> =
    Concat<T, [A]>
