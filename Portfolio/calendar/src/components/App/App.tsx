import React from 'react'

import style from './App.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AppRouter from '../AppRouter/AppRouter'

function App() {
	return (
		<div className={style.wrapper}>
			<div>
				<Header />
			</div>
			<div>
				<AppRouter />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default App
