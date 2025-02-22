import {List} from './List'

/** Add an element **`A`** at the beginning of **`T`**
 * @param T to append to
 * @param A to be added to
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Prepend<T extends List, A extends any> =
    ((head: A, ...args: T) => any) extends ((...args: infer U) => any)
    ? U
    : T
