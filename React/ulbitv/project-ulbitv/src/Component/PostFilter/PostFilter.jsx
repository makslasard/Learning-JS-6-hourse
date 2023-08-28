import React from 'react'

import Input from '../UI/Input/Input'
import Select from '../UI/Select/Select'

import style from './PostFilte.module.scss'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div className={style.wrapper}>
			<div>
				<Input
					placeholder="Поиск..."
					value={filter.query}
					onChange={(e) => setFilter({ ...filter, query: e.target.value })}
				/>
			</div>
			<div>
				<Select
					value={filter.sort}
					onChange={(selectedSort) =>
						setFilter({ ...filter, sort: selectedSort })
					}
					defaultValue="Сортировка по"
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' },
					]}
				/>
			</div>
		</div>
	)
}

export default PostFilter
