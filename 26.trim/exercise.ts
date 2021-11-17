type TWhitespace = ' ' | '\n' | '\t';
type Trim<T> = T extends `${TWhitespace}${infer U}` | `${infer U}${TWhitespace}` ? Trim<U> : T;

/** test case */
type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'