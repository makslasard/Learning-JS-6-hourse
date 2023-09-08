import React from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RoutersNames } from '../../routers'

import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Navbar: React.FC = () => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)
	const navigate = useNavigate()

	return (
		<Layout>
			<Layout.Header
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'end',
					color: '#fff',
				}}
			>
				{isAuth ? (
					<>
						<div style={{ marginRight: '10px' }}>Пользователь: Максим</div>
						<Menu
							theme="dark"
							mode="horizontal"
							selectable={false}
							disabledOverflow={true}
						>
							<Menu.Item key="1" onClick={() => navigate(RoutersNames.LOGIN)}>
								Выйти
							</Menu.Item>
						</Menu>
					</>
				) : (
					<>
						<Menu
							theme="dark"
							mode="horizontal"
							selectable={false}
							disabledOverflow={true}
						>
							<Menu.Item key="1" onClick={() => navigate(RoutersNames.EVENT)}>
								О проекте
							</Menu.Item>
							<Menu.Item key="2" onClick={() => navigate(RoutersNames.LOGIN)}>
								Логин
							</Menu.Item>
						</Menu>
					</>
				)}
			</Layout.Header>
		</Layout>
	)
}

export default Navbar

