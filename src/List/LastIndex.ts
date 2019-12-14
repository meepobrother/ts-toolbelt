import {Length} from './Length'
import {Formats} from '../Iteration/_Internal'
import {Tail} from './Tail'
import {List} from './List'

/** Get the last index of **`T`**
 * @param T to get from
 * @param fmt (?=`'n'`) output
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * ```
 */
export type LastIndex<T extends List, fmt extends Formats = 'n'> =
    Length<Tail<T>, fmt>
