type CamelCase<T extends string> = T extends `${infer L}-${infer RF}${infer Reset}` ? `${L}${Uppercase<RF>}${CamelCase<Reset>}` : T

/** test case */
type Result = CamelCase<'for-bar-baz'> // expected to be 'forBarBaz'