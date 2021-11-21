type GetRequired<T> = {
    [key in keyof T as ({} extends Pick<T, key> ? never : key)]: T[key] 
}

/** test case */
type I = GetRequired<{ 
    foo: number; 
    readonly baz: number;
    bar?: string;
}> // expected to be { foo: number; readonly baz: number }