import React from 'react'
import { publicRoutes, privateRoutes } from '../../routers'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { RootState } from '../../store/store'

const AppRouter: React.FC = () => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)

	return (
		<>
			{isAuth ? (
				<>
					<Routes>
						{publicRoutes.map((router) => (
							<Route
								path={router.path}
								element={router.component}
								key={router.path}
							/>
						))}
					</Routes>
				</>
			) : (
				<>
					<Routes>
						{privateRoutes.map((router) => (
							<Route
								path={router.path}
								element={router.component}
								key={router.path}
							/>
						))}
					</Routes>
				</>
			)}
		</>
	)
}

export default AppRouter
