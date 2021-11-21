type GreaterThan<
    T extends number, 
    U extends number, 
    D extends unknown[] = [1]
> = D['length'] extends T ? 
        false : 
        D['length'] extends U ?  
            true : 
            GreaterThan<T, U, [...D, 1]>
        
/** test case */
type todo1 = GreaterThan<2, 1> //should be true
type todo2 = GreaterThan<1, 2> //should be false
type todo3 = GreaterThan<1, 1> //should be false


