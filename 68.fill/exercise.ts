type Fill<
    T extends unknown[], 
    D, 
    S extends number = 0, 
    E extends number = T['length'],
    canFill extends boolean = false,
    res extends unknown[] = []
> = S extends E ? 
    T : 
    T extends [infer F, ...infer arg] ? 
        res['length'] extends S ? 
            Fill<arg, D, S, E, true, [...res, D]> :
            res['length'] extends E ? 
                Fill<arg, D, S, E, false, [...res, F]> : 
                canFill extends true ?
                    Fill<arg, D, S, E, canFill, [...res, D]> :
                    Fill<arg, D, S, E, canFill, [...res, F]> :
        res; 
        
        
/** test case */
type exp1 = Fill<[1, 2, 3, 4], -1> // expected to be [0, 0, 0]
type exp2 = Fill<[1, 2, 3, 4], -1, 0, 999> // expected to be [0, 0, 0]
type exp3 = Fill<[1, 2, 3, 4], -1, 1, 1> // expected to be [0, 0, 0]
type exp4 = Fill<[1, 2, 3, 4], -1, 1, 2> // expected to be [0, 0, 0]
type exp5 = Fill<[1, 2, 3, 4], -1, 1, 3> // expected to be [0, 0, 0]