type Concat<U extends unknown[], T extends unknown[]> = U extends never ? [] : [...U, ...T];

/** test case */
type Result = Concat<[1], [2,4]> // expected to be [1, 2]