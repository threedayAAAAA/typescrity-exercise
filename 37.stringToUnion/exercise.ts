type StringToUnion<T extends string> = T extends `${infer V}${infer R}` ? V | StringToUnion<R> : never

/** test case */
type Test = '123'
type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"