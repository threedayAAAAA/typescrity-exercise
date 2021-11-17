type Absolute<T extends number | bigint | string> = `${T}` extends `-${infer V}` ? V : T

/** test case */
type Test = -100
type Result = Absolute<Test> // expected to be "100"