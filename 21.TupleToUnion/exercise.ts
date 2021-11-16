type TupleToUnion<T extends unknown[]> = T extends [infer first, ...infer rest] ? first | TupleToUnion<rest> : never
// type TupleToUnion<T extends unknown[]> = T[number]

/** test case */
type Arr = ['1', '2', '3']
type result = TupleToUnion<Arr>