type StartsWith<T, U extends string> = T extends `${U}${any}` ? true : false

/** test case */
type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false