type MyParameters<U extends Function> = U extends (...arg:infer A) => unknown ? A : never

/** test case */
declare function f1(arg: { a: number; b: string }, param: {c: boolean}): void;
type Result = MyParameters<typeof f1>