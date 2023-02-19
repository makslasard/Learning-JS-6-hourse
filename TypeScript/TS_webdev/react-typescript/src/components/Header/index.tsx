import React from 'react'

import { IHeaderProps, IHeaderCount } from './header.interface'

import styles from './Header.module.scss'

const Header: React.FC<IHeaderProps> = ({ id, title, discription }) => {
	const { count, setCount } = React.useState<number>(0)

	const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
		setCount(count + 1)
	}

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.content}>`Товар под номером ${id}`</h1>
				<h3 className={styles.subtitle}>`Подзаголовок товара ${title}`</h3>
				<p className={styles.discription}>`Описание товара ${discription}`</p>
				<button onClick={() => setCount(count + 1)}>{count}</button>
			</div>
		</>
	)
}

export default Header
