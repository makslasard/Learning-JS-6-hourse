import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../../types/auth/authState'
import { IUsers } from '../../../types/auth/users'

const initialState: IAuthState = {
	isAuth: true,
	users: [],
	isLoading: false,
	errorMessage: '',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
			state.isAuth = action.payload.isAuth
		},
		setUser: (state, action: PayloadAction<IUsers>) => {
			state.users.push(action.payload)
		},
		setIsError: (state, action: PayloadAction<{ errorMessage: string }>) => {
			state.errorMessage = action.payload.errorMessage
		},
		setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading
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
