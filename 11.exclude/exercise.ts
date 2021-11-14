type MyExclude<T, U> = T extends U ? never : T;

/** test case */
// type Todo = 'a' | 1
// type TodoPreview = MyExclude<Todo, 1>
// export const todo: TodoPreview = 'a'
// export const todo2: TodoPreview = 1 // err

