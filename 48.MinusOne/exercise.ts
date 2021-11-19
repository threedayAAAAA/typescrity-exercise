type Pop<T extends unknown[]> = T extends [...infer L, unknown] ? [...L] : []
type MinusOne<T extends number, A extends unknown[] = []> = 
    A['length'] extends T ? Pop<A>['length'] : MinusOne<T, [...A, 0]>

/** test case */
type Zero = MinusOne<1> // 0
type twenty = MinusOne<21> // 20