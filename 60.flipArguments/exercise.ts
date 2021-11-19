type Reverse<T extends unknown[], U extends unknown[] = []> = T extends [infer F, ...infer R] ? 
Reverse<R, [F, ...U]> : U
type FlipArguments<T extends Function> = T extends (...arg: infer U) => infer R ? (...arg: Reverse<U>) => R : never

/** test case */
type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>
// (arg0: boolean, arg1: number, arg2: string) => void
