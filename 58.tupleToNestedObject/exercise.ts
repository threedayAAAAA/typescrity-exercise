type TupleToNestedObject<T extends Array<any>, U> = 
    T extends [infer First, ...infer Rest]
        ? {
            [Key in First as T[0]]: TupleToNestedObject<Rest, U>
        }
        : U

/** test case */
type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
