import { IUsers } from './users'

export interface IAuthState {
	isAuth: boolean
	users: IUsers[]
	isLoading: boolean
	errorMessage: string
}
