import { combineReducers } from 'redux'
import { userReducers } from './usersReducer/UserSlice'
import { authReducer } from './authReducer/authSlice'

export const rootReducer = combineReducers({
	user: userReducers,
	auth: authReducer,
})
