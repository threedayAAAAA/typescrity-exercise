type Unshift<U extends unknown[], T> = [T, ...U]

/** test case */
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]