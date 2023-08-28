import React from 'react'

import style from './Modal.module.scss'

const Modal = ({ children, visible, setVisible }) => {
	const rootClass = [style.wrapper]

	if (visible) {
		rootClass.push(style.active)
	}

	return (
		<div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
			<div className={style.content} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
			<div>1</div>
		</div>
	)
}

export default Modal
