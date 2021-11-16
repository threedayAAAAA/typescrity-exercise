type Push<U extends unknown[], T> = [...U, T]

/** test case */
type Result = Push<[1, 2], '3'> // [1, 2, '3']