import { configureStore } from 'reduxjs/toolkit'
import { todoReducer } from './features/Todos/todos-slice'
import { filterReducer} from './features/Filters/filter-slice'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        filter: filterReducer
    },
    devTools: true
})

