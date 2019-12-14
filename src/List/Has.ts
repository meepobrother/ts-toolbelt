import {Match} from '../Any/_Internal'
import {Has as OHas} from '../Object/Has'
import {Index} from '../Any/Index'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/** Check whether **`T`** has a entry of key **`K`** that matches **`M`**
 * @param T to be inspected
 * @param K to choose entry
 * @param M (?=`any`) to check entry type
 * @param match (?=`'default'`) to change precision
 * @returns [[Boolean]]
 * @example
 * ```ts
 * ```
 */
export type Has<T extends List, K extends Index, M extends any = any, match extends Match = 'default'> =
    OHas<ObjectOf<T>, K, M, match>
