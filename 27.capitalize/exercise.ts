type Capitalize<T extends string> = T extends `${infer first}${infer U}` ? `${Uppercase<first>}${U}` : T;

/** test case */
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'