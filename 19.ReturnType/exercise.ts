type MyReturnType<U extends Function> = U extends (...arg:any[]) => infer A ? A : never

/** test case */
const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"