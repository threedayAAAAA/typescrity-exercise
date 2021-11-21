type Chunk<
    T, 
    N extends number, 
    current extends unknown[] = [], 
    res extends unknown[] = []
> = T extends [infer F, ...infer arg] ? 
        current['length'] extends N ? 
            Chunk<arg, N, [F], [...res, current]> :
            Chunk<arg, N, [...current, F], res> :
        current['length'] extends 0 ? res : [...res, current]
        
/** test case */
type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]