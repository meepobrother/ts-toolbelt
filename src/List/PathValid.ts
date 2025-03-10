import {PathValid as OPathValid} from '../Object/PathValid'
import {Index} from '../Any/Index'
import {List} from './List'

/** Replaces invalid parts of a path with `never`
 * @param T to be inspected
 * @param Path to be validated
 * @returns **`Index[]`**
 * @example
 * ```ts
 * import {A, T, O} from 'ts-toolbelt'
 *
 * // Get a property in an array `t` at any depth with `path`
 * // `A.Cast<P, T.PathValid<T, P>>` makes sure `path` is valid
 * const getAt = <
 * T extends L.List,
 * P extends L.List<A.Index>
 * >(t: T, path: A.Cast<P, T.PathValid<T, P>>): T.Path<T, P> => {
 *     let valueAt = t
 *
 *     for (const p of path)
 *         valueAt = valueAt[p]
 *
 *     return valueAt as any
 * }
 *
 * const test0 = getAt([[[1]]] as const, [0, 0] as const) // [1]
 * const test1 = getAt([[[1]]] as const, [1] as const)    // error
 * ```
 */
export type PathValid<T extends List, Path extends List<Index>> =
    OPathValid<T, Path>
