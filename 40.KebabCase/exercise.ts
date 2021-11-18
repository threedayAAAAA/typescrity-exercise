type KebabCase<T extends string> = T extends `${infer L}${infer RF}${infer Reset}` ? 
    RF extends Uppercase<RF> ? `${L}-${Lowercase<RF>}${KebabCase<Reset>}` : T : 
    T

/** test case */
type Result222 = KebabCase<'FooBarBaz'> // expected to be 'for-bar-baz'