import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '../../../routes/index'
import { AuthContext } from '../../../context'

const AppRouter = () => {
	const [isAuth, setIsAuth] = useState(true)

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{isAuth ? (
				<Routes>
					{privateRoutes.map((router) => (
						<Route path={router.path} element={router.component} />
					))}
				</Routes>
			) : (
				<Routes>
					{publicRoutes.map((router) => (
						<Route path={router.path} element={router.component} />
					))}
				</Routes>
			)}
		</AuthContext.Provider>
	)
}

export default AppRouter
