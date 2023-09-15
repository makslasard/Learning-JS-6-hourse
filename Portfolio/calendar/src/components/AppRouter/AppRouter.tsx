import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../../routers'
import { RootState } from '../../store/store'

import style from './AppRouter.module.scss'

const AppRouter: React.FC = () => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)

	return (
		<div className={style.wrapper}>
			{isAuth ? (
				<div>
					<Routes>
						{publicRoutes.map((router) => (
							<Route
								path={router.path}
								element={router.component}
								key={router.path}
							/>
						))}
					</Routes>
				</div>
			) : (
				<div>
					<Routes>
						{privateRoutes.map((router) => (
							<Route
								path={router.path}
								element={router.component}
								key={router.path}
							/>
						))}
					</Routes>
				</div>
			)}
		</div>
	)
}

export default AppRouter
