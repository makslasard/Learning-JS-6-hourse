import React, { useEffect } from 'react'

import Layout from 'antd/es/layout/layout'
import Row from 'antd/es/grid/row'

import './Login.module.scss'
import LoginForm from './LoginForm/LoginForm'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUsers } from '../../store/reducers/usersReducer/ActionCreators'

const Login: React.FC = () => {
	const dispatch = useAppDispatch()
	const { users, isLoading, error } = useAppSelector((state) => state.user)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	return (
		<Layout>
			<div>{isLoading && <div>Идет загрузка...</div>}</div>
			<div>{error && <div>{error}</div>}</div>
			<div>{JSON.stringify(users)}</div>
			<Row justify="center" align="middle" style={{ height: 'calc(100vh - 64px)' }}>
				<LoginForm />
			</Row>
		</Layout>
	)
}

export default Login
