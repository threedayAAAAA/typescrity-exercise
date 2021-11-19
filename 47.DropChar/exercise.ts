type DropChar<T extends string, U extends string> = T extends `${infer L}${U}${infer R}` ? DropChar<`${L}${R}`, U> : T 

/** test case */
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'