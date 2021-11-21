type GetOptional<T> = {
    [key in keyof T as ({} extends Pick<T, key> ? key : never)]: T[key] 
}

/** test case */
type I = GetOptional<{ 
    foo: number; 
    readonly baz: number;
    bar?: string;
}> // expected to be { bar: string; }