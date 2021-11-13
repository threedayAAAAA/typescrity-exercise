type DeepReadonly<T> = {
    readonly [key in keyof T]: T[key] extends Object ? 
                            T[key] extends Function ? T[key] : DeepReadonly<T[key]>
                            : T[key]
}

/** test case */
// type X = {
//     x: {
//       a: 1
//       b: 'hi'
//     }
//     y: 'hey'
//   }
  
// type Expected = {
//     readonly x: {
//         readonly a: 1
//         readonly b: 'hi'
//     }
//     readonly y: 'hey'
// }

// const todo: DeepReadonly<X> = {
//     x: {
//         a: 1,
//         b: 'hi'
//     },
//     y: 'hey'
// }
// todo.x = { // Error: cannot reassign a readonly property
//     a: 1,
//     b: 'hi'
// }
// todo.x.a = 1 // Error: cannot reassign a readonly property