import React from 'react'

import Layout from 'antd/es/layout/layout'
import Row from 'antd/es/grid/row'

import './Login.module.scss'
import LoginForm from './LoginForm/LoginForm'

const Login: React.FC = () => {
	return (
		<Layout>
			<Row justify="center" align="middle" style={{ height: 'calc(100vh - 64px)' }}>
				<LoginForm />
			</Row>
		</Layout>
	)
}

export default Login
