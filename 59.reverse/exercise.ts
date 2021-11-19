type Reverse<T extends unknown[], U extends unknown[] = []> = T extends [infer F, ...infer R] ? 
Reverse<R, [F, ...U]> : U

/** test case */
type a2 = Reverse<['a', 'b']> // ['b', 'a']
type b2 = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
