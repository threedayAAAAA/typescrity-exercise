type Flip<T extends Record<any, any>> = {
    [key in keyof T as T[key] | `${T[key]}`]: key
}

        
/** test case */
type r1 = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type r2 = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type r3 = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
