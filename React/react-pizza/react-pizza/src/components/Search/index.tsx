import React, { useRef, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import { setSearchValue } from '../../redux/slices/filterSlice'

import searchSvg from '../../assets/img/search.svg'
import closeSvg from '../../assets/img/close.svg'

import style from './Search.module.scss'

const Search: React.FC = () => {
	const dispatch = useDispatch()

	const { value, setValue } = useState<string>('')

	const inputRef = useRef<HTMLInputElement>(null)

	const onClickClear = (event: React.MouseEvent<SVGSVGElement>) => {
		dispatch(setSearchValue(''))
		setValue('')
		inputRef.current?.focus()
	}

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str))
		}, 1000),
		[]
	)

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	return (
		<div className={style.container}>
			<img className={style.search} src={searchSvg} alt="search" />
			<input
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={style.input}
				placeholder="Поиск пиццы..."
			/>
			{value && (
				<img
					onClick={onClickClear}
					className={style.close}
					src={closeSvg}
					alt="search"
				/>
			)}
		</div>
	)
}

export default Search
