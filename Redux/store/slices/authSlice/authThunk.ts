import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUsers } from '../../../types/auth/users'

export const getDataUsers = createAsyncThunk('auth/getDataUsers', async (_, thunkApi) => {
	try {
		const response = await axios.get<IUsers>('/public/users.json')
		return response.data
	} catch (e) {
		return thunkApi.rejectWithValue('Не удалось загрузить пользователя!')
	}
})
