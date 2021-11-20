type FlattenDepth<T, D extends number = 1, A extends any[] = []> = T extends [infer F, ...infer R] ? 
    A['length'] extends D ? 
        T : 
        F extends any[] ? [...FlattenDepth<F, D, [...A, 0]>, ...FlattenDepth<R, D, A>] : 
            [F, ...FlattenDepth<R, D, A>]
    : T
        
/** test case */
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
