type IsUnion<T, U = T> = T extends any ? 
    Exclude<U,T> extends never ? false : true : 
    never

/** test case */
type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false
type case4 = IsUnion<boolean>  // true