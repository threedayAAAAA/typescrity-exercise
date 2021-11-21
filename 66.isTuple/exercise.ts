type IsTuple<T> = T extends readonly any[] ? 
    T['length'] extends number ? true : false :
    false

/** test case */
type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false