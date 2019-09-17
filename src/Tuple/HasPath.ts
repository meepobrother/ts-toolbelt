import {HasPath as OHasPath} from '../Object/HasPath'
import {Match} from '../Any/_Internal'
import {Index} from '../_Internal'
import {ObjectOf} from './ObjectOf'
import {Tuple} from './Tuple'

/** Check whether **`T`** has nested entries that match **`M`**
 * @param T to be inspected
 * @param Path to be followed
 * @param M to check entry type (?=`any`)
 * @param match to change precision (?=`'default'`)
 * @returns **`Boolean`**
 * @example
 * ```ts
 * ```
 */
export type HasPath<T extends Tuple, Path extends Index[], M extends any = any, match extends Match = 'default'> =
    OHasPath<ObjectOf<T>, Path, M, match>
