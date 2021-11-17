type AppendToObject<T, K extends string, V> = {
    [key in (keyof T) | K]: key extends keyof T ? T[key] : V
}

/** test case */
type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }