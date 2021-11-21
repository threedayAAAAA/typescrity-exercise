type Zip<T extends any[], U extends unknown[], R extends unknown[] = []> = 
    T extends [infer F1, ...infer R1] ? 
        U extends [infer F2, ...infer R2] ? 
            Zip<R1, R2, [...R, [F1, F2]]> :
            R :
        R

/** test case */
type exp = Zip<[1, 2, 3], [true, false, 666]> // expected to be [[1, true], [2, false],[3, 666]]