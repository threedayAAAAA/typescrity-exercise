type RequiredByKeys<T, U extends keyof T> =  T 
& {
    [key in U]-?: T[key]
}

/** test case */
interface User {
    name?: string
    age?: number
    address?: string
}

type UserPartialName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
