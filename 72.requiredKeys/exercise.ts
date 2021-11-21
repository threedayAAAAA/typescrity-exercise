type RequiredKeys<T> = {
    [key in keyof T]: {} extends Pick<T, key> ? never : key 
}[keyof T]

/** test case */
type I = RequiredKeys<{ 
    foo: number; 
    readonly baz: number;
    bar?: string;
}> // expected to be foo | baz