import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUsers } from '../../../types/auth/users'
import { IAuthState } from '../../../types/auth/authState'

const initialState: IAuthState = {
	isAuth: false,
	user: {} as IUsers,
	isLoading: false,
	isError: '',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
			state.isLoading = false
		},
		setUser: (state, action: PayloadAction<string>) => {
			state.user.username = action.payload
			state.user.password = action.payload
		},
		setIsError: (state, action: PayloadAction<string>) => {
			state.isError = action.payload
			state.isLoading = false
		},
	},
})

export const { actions, reducer } = authSlice
