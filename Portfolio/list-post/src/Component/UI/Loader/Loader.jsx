import React from 'react'

import style from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.loader}></div>
			<h1>Идет загрузка...</h1>
		</div>
	)
}

export default Loader
