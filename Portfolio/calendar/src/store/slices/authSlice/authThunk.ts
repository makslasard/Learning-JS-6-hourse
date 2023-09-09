import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUsers } from '../../../types/auth/users'
import axios from 'axios'

export const authThunk = createAsyncThunk(
	'authThunk/getUsers',
	async (users: IUsers[], thunkApi) => {
		try {
			const response = await axios.get('/public/users.json')
			console.log(response.data)
		} catch (e) {
			console.log(e)
		}
	}
)
