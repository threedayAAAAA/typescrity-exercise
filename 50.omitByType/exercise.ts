type OmitType<T, U, K = keyof T> = K extends keyof T ? T[K] extends U ? never : K : never 
type OmitByType<T, U> = {
    [key in OmitType<T, U>]: T[key]
}

/** test case */
type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}, boolean> // { name: string; count: number }