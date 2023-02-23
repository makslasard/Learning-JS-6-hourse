import React, { ChangeEvent } from 'react'
import ReactPaginate from 'react-paginate'

import style from './Pagination.module.scss'

interface IPaginationProps {
	value: number
	onPageChange: (page: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({ value, onPageChange }) => {
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
			/>
		</div>
	)
}

export default Pagination
