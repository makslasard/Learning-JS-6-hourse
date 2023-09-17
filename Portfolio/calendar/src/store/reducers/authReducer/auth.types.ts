export interface IAuthDataUsers {
	username: string | number
	password: string | number
}

export interface IAuthState {
	isAuth: boolean
	authDateUsers: IAuthDataUsers[]
	isLoading: boolean
	errorMessage: string
}
