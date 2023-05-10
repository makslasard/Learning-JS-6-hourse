import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../types/user.types'

const fetchUserById = (userId: number): Promise<IUser> =>
	new Promise((resolve) =>
		setTimeout(() => {
			resolve({ id: 1, name: 'Max' })
		}, 1000)
	)

export const getUserById = createAsyncThunk<IUser, number>(
	'users/by-id',
	async (userId, thunkApi) => {
		try {
			const responce = await fetchUserById(userId)

			return responce
		} catch (error) {
			return thunkApi.rejectWithValue({ error })
		}
	}
)

/*
userId - то что получаем в action в качестве аргумента

Далее нужно описать extraReducers для каждого состояния promise
    Что мы будем делать при resolve, reject, pending, fulfild

thunkApi - позволяет обратиться к состоянию чтобы что-то с этим состоянием сделать


*/
