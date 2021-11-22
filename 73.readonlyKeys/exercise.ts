export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true
    
type GetReadonlyKeys<T> = {
    [key in keyof T]: Equal<{[k in key]: T[k] }, { - readonly[k in key]: T[k] }> extends true ? never : key
}[keyof T]

/** test case */
type Keys = GetReadonlyKeys<{ 
    foo: number; 
    readonly baz: number;
    bar?: string;
}> // expected to be baz