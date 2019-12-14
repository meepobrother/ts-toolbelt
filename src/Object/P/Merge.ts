import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../Any/Index'
import {Merge as OMerge} from '../Merge'
import {Length} from '../../List/Length'
import {List} from '../../List/List'
import {Depth} from '../_Internal'

/**
 * @hidden
 */
type _Merge<O, Path extends List<Index>, O1 extends object, depth extends Depth, I extends Iteration = IterationOf<'0'>> =
  O extends object                                               // If it's an object
  ? Pos<I> extends Length<Path>                                  // If we've reached the end
    ? OMerge<O, O1, depth>                                       // Use standard Merge
    : {
        [K in keyof O]: K extends Path[Pos<I>]                   // If K is part of Path
                        ? _Merge<O[K], Path, O1, depth, Next<I>> // Continue diving
                        : O[K]                                   // Not part of path - x
      } & {}
  : O                                                            // Not an object - x

/** Complete the fields of **`O`** at **`Path`** with the ones of **`O1`**
 * (⚠️ this type is expensive)
 * @param O to complete
 * @param Path to be followed
 * @param O1 to copy from
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<O extends object, Path extends PPath, O1 extends object, depth extends Depth = 'flat'> =
   _Merge<O, Path, O1, depth>
