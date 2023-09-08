import Event from '../pages/Event/Event'
import Login from '../pages/Login/Login'

export enum RoutersNames {
	LOGIN = '/login',
	EVENT = '/',
}

export const privateRoutes = [
	{ path: RoutersNames.LOGIN, component: <Login /> },
]

export const publicRoutes = [
	{ path: RoutersNames.EVENT, component: <Event /> }
]
