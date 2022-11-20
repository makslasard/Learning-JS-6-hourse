import { combineReducers } from "redux";

import { todosReducer } from "./todos/todos-reducer";
import { usersReducer } from "./users/users-reducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    todos: todosReducer
})