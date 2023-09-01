import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../UI/Button/Button'

import style from './Post.module.scss'

const Post = ({ deletePost, post }) => {
	const navigate = useNavigate()

	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<h2>
					{post.id}. {post.title}
				</h2>
				<p>{post.body}</p>
			</div>
			<div className={style.wrapper_buttons}>
				<div className={style.button}>
					<Button onClick={() => navigate(`/posts/${post.id}`)}>Открыть</Button>
				</div>
				<div className={style.button}>
					<Button onClick={() => deletePost(post)}>Удалить</Button>
				</div>
			</div>
		</div>
	)
}

export default Post
