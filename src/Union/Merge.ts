import {At} from '../Object/At'
import {Overwrite} from '../Object/Overwrite'
import {Compute} from '../Any/Compute'
import {IntersectOf} from './IntersectOf'
import {Strict} from './Strict'

/**
 * @hidden
 */
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: U extends unknown
                      ? At<U, K>
                      : never
}>>

/** Merge a [[Union]] of **`object`**s into a single one
 * @param U to merge
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<U extends object> =
    Compute<_Merge<Strict<U>>>
