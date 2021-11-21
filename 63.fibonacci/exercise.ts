type Fibonacci<T, 
    currentIndex extends unknown[] = [1], 
    pre extends unknown[] = [], 
    current extends unknown[] = [1]
> = currentIndex['length'] extends T ? current['length'] : Fibonacci<T, [...currentIndex, 1], current, [...pre, ...current]>

        
/** test case */
type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
type Result3 = Fibonacci<1> // 1


