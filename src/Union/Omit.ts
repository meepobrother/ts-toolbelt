import {Omit as OOmit} from '../Object/Omit'
import {Omit as LOmit} from '../List/Omit'
import {Index} from '../Any/Index'
import {Kind} from '../Any/Kind'

/** Remove out from each member of union **`U`** the fields of key **`K`**
 * @param U to remove from
 * @param K to chose fields
 * @returns **union**
 * @example
 * ```ts
 * import {U} from 'ts-toolbelt'
 *
 * type O = {type: 'foo'; other: number} | {type: 'bar'; other: string} | [0, 1]
 * type test0 = U.Omit<O, 'other' | '0'> // {type: 'foo'} | {type: 'bar'} | [1]
 * ```
 */
export type Omit<U extends object, K extends Index> =
    U extends unknown
    ? Kind<U> extends 'array'
      ? LOmit<U & [], K>
      : OOmit<U, K>
    : never
