import React from 'react'

import style from './Select.module.scss'

const Select = ({ defaultValue, options, value, onChange }) => {
	return (
		<div className={style.wrapper}>
			<select
				style={{ marginTop: '20px', marginBottom: '20px' }}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className={style.select}
			>
				<option disabled defaultValue={defaultValue}>
					{defaultValue}
				</option>
				{options.map((option) => (
					<option key={option.value} value={option.value} className={style.option}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
