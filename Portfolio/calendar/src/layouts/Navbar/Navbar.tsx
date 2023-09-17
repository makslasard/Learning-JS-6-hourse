import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RoutersNames } from '../../routers'

import style from './Navbar.module.scss'

const Navbar: React.FC = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false)
	const navigate = useNavigate()

	return (
		<Layout>
			<Layout.Header className={style.layout_header}>
				{isAuth ? (
					<div className={style.wrapper_menu}>
						<div className={style.menu_user}>Пользователь: Максим</div>
						<Menu theme="dark" mode="horizontal" selectable={false} disabledOverflow>
							<Menu.Item
								key="1"
								onClick={() => navigate(RoutersNames.LOGIN)}
								className={style.menu_item}>
								<p>Выйти</p>
							</Menu.Item>
						</Menu>
					</div>
				) : (
					<div>
						<Menu
							theme="dark"
							mode="horizontal"
							selectable={false}
							disabledOverflow
							style={{ backgroundColor: 'teal' }}>
							<Menu.Item key="1" onClick={() => navigate(RoutersNames.EVENT)}>
								О проекте
							</Menu.Item>
							<Menu.Item key="2" onClick={() => navigate(RoutersNames.LOGIN)}>
								Логин
							</Menu.Item>
						</Menu>
					</div>
				)}
			</Layout.Header>
		</Layout>
	)
}

export default Navbar
