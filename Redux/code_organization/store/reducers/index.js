import { combaineReducers } from 'redux'

import {todos} from './todos-reducers'

export const rootReducer = combaineReducers({
    todos,
})

