import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthDataUsers, IAuthState } from './auth.types'
import { getAuthDateUsers } from './authThunk'

const initialState: IAuthState = {
	isAuth: false,
	authDateUsers: [],
	isLoading: false,
	errorMessage: '',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[getAuthDateUsers.fulfilled.type]: (state, action: PayloadAction<IAuthDataUsers[]>) => {
			state.isLoading = false
			state.errorMessage = ''
			state.authDateUsers = action.payload
		},
		[getAuthDateUsers.pending.type]: (state) => {
			state.isLoading = true
		},
		[getAuthDateUsers.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.errorMessage = action.payload
		},
	},
})

export const { reducer: authReducer, actions: authActions } = authSlice
