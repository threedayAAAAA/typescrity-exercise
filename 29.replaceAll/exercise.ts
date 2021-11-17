type ReplaceAll<T extends string, U extends string, L extends string> = 
    T extends `${infer left}${U}${infer right}` ? 
        ReplaceAll<`${left}${L}${right}`, U, L> : T;

/** test case */
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'