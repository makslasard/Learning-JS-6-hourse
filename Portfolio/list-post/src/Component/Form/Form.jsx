import React, { useState } from 'react'

import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

import style from './Form.module.scss'

const Form = ({ createPost }) => {
	const [post, setPost] = useState({
		title: '',
		body: '',
	})

	const addNewPost = (event) => {
		event.preventDefault()

		const newPost = {
			...post,
			id: Date.now(),
		}
		createPost(newPost)
		setPost({ title: '', body: '' })
	}

	return (
		<div className={style.wrapper}>
			<form action="">
				<Input
					value={post.title}
					placeholder="Название поста"
					onChange={(e) => setPost({ ...post, title: e.target.value })}
				/>
				<Input
					placeholder="Описание поста"
					value={post.body}
					onChange={(e) => setPost({ ...post, body: e.target.value })}
				/>
				<Button onClick={addNewPost}>Создать пост</Button>
			</form>
		</div>
	)
}

export default Form
