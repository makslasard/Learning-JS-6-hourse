import { createStore } from 'react-redux'
import { rootReducer } from './reducers/index'

export const store = createStore(rootReducer)