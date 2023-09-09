import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUsers } from '../../../types/auth/users'
import { IAuthState } from '../../../types/auth/authState'

const initialState: IAuthState = {
	isAuth: false,
	users: {} as IUsers,
	isLoading: false,
	isError: '',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state: IAuthState, action: PayloadAction<{ isAuth: boolean }>) => {
			state.isAuth = action.payload.isAuth
			state.isLoading = false
		},
		setUser: (
			state: IAuthState,
			action: PayloadAction<{ username: string; password: string }>
		) => {
			state.users.username = action.payload.username
			state.users.password = action.payload.password
		},
		setIsError: (state: IAuthState, action: PayloadAction<{ isError: string }>) => {
			state.isError = action.payload.isError
			state.isLoading = false
		},
	},
})

export const { reducer: authReducer, actions: authActions } = authSlice

/*
Рекомендации: 
	1. Писать actions в мутабельном стиле через immer
	2. Делать типизацию PayloadAction более прозрачной: PayloadAction<{ username: string; password: string }
		Чтобы понимать что конкретно мы типизируем
	3. Переименовывать reducer и actions в slice так как могут повторяться actions и их может быть отчень 
		много. В таком формате удобней и понятней
		И вызывать наши action теперь в формате: dispatch(authActions.setAuth(true))

*/
