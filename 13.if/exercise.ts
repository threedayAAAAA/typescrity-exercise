type If<U, T1, T2> = U extends true ? T1 : T2;

/** test case */
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'