type Awaited<T> = T extends Promise<infer U> ? U : never;

/** test case */
type Todo = Promise<boolean>
type TodoPreview = Awaited<Todo>
export const todo: TodoPreview = true

