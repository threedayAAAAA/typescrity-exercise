type Chainable<R extends Object = {}> = {
    option<K extends string, V>(key: K, val: V): Chainable<{ [key in K]: V } & R>
    get(): R
}

/** test case */
declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
type Result = typeof result
// interface Result {
//   foo: number
//   name: string
//   bar: {
//     value: string
//   }
// }