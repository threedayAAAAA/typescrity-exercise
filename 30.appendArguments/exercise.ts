type AppendArgument<F extends Function, T> = F extends (...arg: infer U) => infer R ? (...arg: [...U, T]) => R : never

/** test case */
type Fn = (a: number, b: string) => number
type Fn2 = Parameters<Fn>
type Result = AppendArgument<Fn, boolean>
// 期望是 (a: number, b: string, x: boolean) => number