type ObjectEntries<T, U = keyof T> = U extends keyof T ? [U, T[U]] : never 

/** test case */
type Model = {
    name: string
    age: number
    locations: number |  null | undefined
}

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];