import React from 'react'
import { Layout } from 'antd'

import AppRouter from '../AppRouter/AppRouter'
import Navbar from '../../layouts/Navbar/Navbar'

import style from './App.scss'

const App: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Layout>
				<Navbar />
				<Layout.Content>
					<AppRouter />
				</Layout.Content>
			</Layout>
		</div>
	)
}

export default App
