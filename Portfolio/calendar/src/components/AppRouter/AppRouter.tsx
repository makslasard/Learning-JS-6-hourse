import React, { useState } from 'react'
import { publicRoutes, privateRoutes } from '../../routers'
import { Route, Routes } from 'react-router-dom'

const AppRouter: React.FC = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	return (
		<>
			{isAuth ? (
				<Routes>
					{privateRoutes.map((router) => (
						<Route
							path={router.path}
							element={router.component}
							key={router.path}
						/>
					))}
				</Routes>
			) : (
				<Routes>
					{publicRoutes.map((router) => (
						<Route
							path={router.path}
							element={router.component}
							key={router.path}
						/>
					))}
				</Routes>
			)}
		</>
	)
}

export default AppRouter
