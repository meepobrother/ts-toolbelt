import {Replace as OReplace} from '../Object/Replace'
import {Match} from '../Any/_Internal'
import {Cast} from '../Any/Cast'
import {List} from './List'

/** Update with **`A`** the entries of **`T`** that match **`M`**
 * @param O to update
 * @param M to select fields
 * @param A to update with
 * @param match (?=`'default'`) to change precision
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Replace<T extends List, M extends any, A extends any, match extends Match = 'default'> =
    Cast<OReplace<T, M, A, match>, List>
