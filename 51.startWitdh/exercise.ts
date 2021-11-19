type EndsWith<T, U extends string> = T extends `${any}${U}` ? true : false

/** test case */
type a2 = EndsWith<'abc', 'ac'> // expected to be false
type b2 = EndsWith<'abc', 'bc'> // expected to be true
type c2 = EndsWith<'abc', 'dabc'> // expected to be false