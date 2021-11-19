type Mutable<T> = {
   -readonly [key in keyof T]: T[key]
}

/** test case */
interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }