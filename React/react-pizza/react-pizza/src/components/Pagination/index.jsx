import React from 'react'
import ReactPaginate from 'react-paginate'

import style from './Pagination.module.scss'

const Pagination = ({ value, onPageChange }) => {
	return (
		<div>
			<ReactPaginate
				className={style.root}
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={(event) => onPageChange(event.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={value}
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}

export default Pagination
