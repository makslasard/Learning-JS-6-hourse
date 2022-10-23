import { todos } from "../reducers/todos-reducers"

export const allTodos = (state) => state.todos

export const activeTodo = (state) => state.todos.filter(todo => todos.compleated === false)
// За счет фильтра мы убираем задачи которые не подходят под условие фильтрации