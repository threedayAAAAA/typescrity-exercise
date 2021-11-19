type PartialByKeys<T, U extends keyof T> =  {
    [key in Exclude<keyof T, U>]: T[key]
} & {
    [key in U]?: T[key]
}

/** test case */
interface User {
    name: string
    age: number
    address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string 