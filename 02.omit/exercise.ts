type MyOmit<T, K extends keyof T> = {
    [key in Exclude<keyof T, K>]: T[key]
}

/** test case */
// interface Todo {
// title: string
// description: string
// completed: boolean
// }

// type TodoPreview = MyOmit<Todo, 'description' | 'title'>

// const todo: TodoPreview = {
// completed: false,
// }