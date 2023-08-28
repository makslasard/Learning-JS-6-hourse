import React, { useState, useMemo } from 'react'

import PostList from './Component/PostList/PostList'
import PostFilter from './Component/PostFilter/PostFilter'
import Form from './Component/Form/Form'

import style from './App.module.scss'

const App = () => {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'JavaScript description' },
		{ id: 2, title: 'React', body: 'React description' },
		{ id: 3, title: 'Redux', body: 'Redux description' },
	])
	const [filter, setFilter] = useState({ sort: '', query: '' })

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const deletePost = (post) => {
		setPosts(posts.filter(item => item.id !== post.id))
	}

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts])


	return (
		<div className={style.wrapper}>
			<div>
				<Form createPost={createPost} />
			</div>
			<hr style={{ marginTop: '20px', marginBottom: '20px' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<div>
				{
					sortedAndSearchPosts.length === 0
						? <div style={{ textAlign: 'center', marginTop: '100px' }}><h1>Посты не найдены!</h1></div>
						: <PostList posts={sortedAndSearchPosts} deletePost={deletePost} />
				}
			</div>
		</div>
	)
}

export default App
