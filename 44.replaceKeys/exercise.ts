type ReplaceKeys<T, U, D> = T extends any ? {
    [key in keyof T]: key extends U ?  
    key extends keyof D ? D[key] : never :
    T[key]
} : never 

/** test case */
type NodeA = {
    type: 'A'
    name: string
    flag: number
}

type NodeB = {
    type: 'B'
    id: number
    flag: number
}

type NodeC = {
    type: 'C'
    name: string
    flag: number
}

type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }> 
// would replace name from string to number, replace flag from number to string.
// {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} 

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }> 
// would replace name to never
// {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} 