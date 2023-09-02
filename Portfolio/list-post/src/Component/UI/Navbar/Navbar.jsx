import React from 'react'
import { Link } from 'react-router-dom'

import style from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div>
			<div className={style.wrapper}>
				<Link to="/about" className={style.link}>
					About
				</Link>
			</div>
		</div>
	)
}

export default Navbar
