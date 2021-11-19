type Shift<T> = T extends [any, ...infer U] ? U : []  

/** test case */
type Result = Shift<[3, 2, 1]> // [2, 1]