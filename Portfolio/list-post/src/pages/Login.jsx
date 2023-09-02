import React from 'react'
import Input from '../Component/UI/Input/Input'
import Button from '../Component/UI/Button/Button'

const Login = () => {
	return (
		<div>
			<h1 style={{ marginTop: '15px' }}>Страница логина</h1>
			<form>
				<Input type="text" placeholder="Введите логин" />
				<Input type="password" placeholder="Введите пароль" />
				<Button>Войти</Button>
			</form>
		</div>
	)
}

export default Login
