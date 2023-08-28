import React from 'react'

import Button from '../../UI/Button/Button'

import style from './Post.module.scss'

const Post = (props) => {
	const { deletePost } = props

	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<h2>
					{props.number}. {props.post.title}
				</h2>
				<p>{props.post.body}</p>
			</div>
			<div className={style.button}>
				<Button onClick={() => deletePost(props.post)}>Удалить</Button>
			</div>
		</div>
	)
}

export default Post
