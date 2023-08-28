import React from 'react'

import style from './Select.module.scss'

const Select = ({ defaultValue, options, value, onChange }) => {
	return (
		<div className={style.wrapper}>
			<select
				style={{ marginTop: '20px', marginBottom: '20px' }}
				value={defaultValue}
				onChange={(event) => onChange(event.target.value)}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
