type CurriedFunc<P, R> = 
    P extends [] ? 
        () => R :
        P extends [infer F] ? 
            (F) => R :
            P extends [infer F, ...infer reset] ?
                (F) => CurriedFunc<reset, R> :
                never
declare function Currying<Fn>(fn: Fn): Fn extends (...arg: infer A) => infer R ? CurriedFunc<A, R> : never

/** test case */
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)