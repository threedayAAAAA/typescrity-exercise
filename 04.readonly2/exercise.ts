type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [key in K]: T[key]
} & T

/** test case */
// interface Todo {
//     title: string
//     description: string
//     completed: boolean
// }
  
// const todo: MyReadonly2<Todo, 'title' | 'description'> = {
//     title: 'Hey',
//     description: 'foobar',
//     completed: false,
// }

// todo.title = 'Hello' // Error: cannot reassign a readonly property
// todo.description = 'barFoo' // Error: cannot reassign a readonly property
// todo.completed = true // OK