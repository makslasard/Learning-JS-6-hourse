import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { authSlice } from './slices/authSlice/authSlice'

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
	middleware: [thunk],
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
