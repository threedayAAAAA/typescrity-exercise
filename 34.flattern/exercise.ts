type Flatten<T> = T extends [infer first, ...infer reset] ? 
    first extends any[] ? [...Flatten<first>, ...Flatten<reset>] : [first, ...Flatten<reset>] :
    []

/** test case */
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]