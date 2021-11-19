type getPickType<T, U, K = keyof T> = K extends keyof T ? T[K] extends U ? K : never : never 
type PickByType<T, U> = {
    [key in getPickType<T, U>]: T[key]
}

/** test case */
type todo = {
    name: string,
    count: number,
    isReadonly: boolean,
    isEnable: boolean,
}
type OnlyBoolean = PickByType<todo, boolean> // { isReadonly: boolean; isEnable: boolean; }