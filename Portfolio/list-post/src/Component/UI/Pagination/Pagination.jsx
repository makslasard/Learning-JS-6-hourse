import React from 'react'

import Button from '../Button/Button'
import { getPagesArray } from '../../../utils/pages'

import style from './Pagination.module.scss'

const Pagination = ({ totalPages, changePage, page }) => {
	let pagesArray = getPagesArray(totalPages)
    

	return (
		<div>
			<div className={style.wrapper}>
				{pagesArray.map((p) => (
					<Button
						key={p}
						onClick={() => changePage(p)}
						className={page === p ? '' : ''} // Добавить актичные стили
					>
						{p}
					</Button>
				))}
			</div>
		</div>
	)
}

export default Pagination
