type MyOmit<T, U> = {
    [key in Exclude<keyof T, U>]: T[key]
}

/** test case */
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}