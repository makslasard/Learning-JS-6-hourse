import { IUsers } from './users'

export interface IAuthState {
	isAuth: boolean
	user: IUsers
	isLoading: boolean
	isError: string
}
