type Merge<T, U> = {
    [key in keyof T | keyof U]: key extends keyof U ? U[key] : key extends keyof T ? T[key] : never
}

/** test case */
type test1 = {
    a: string;
    b: number
}
type test2 = {
    a: boolean;
    c: true
}
type Result22 = Merge<test1, test2> 
// expected to be 
// {
//     a: boolean,
//     b: number,
//     c: true
// }