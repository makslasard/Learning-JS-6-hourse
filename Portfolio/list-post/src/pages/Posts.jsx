import React, { useEffect, useState } from 'react'

import { useFetching } from '../hooks/useFetching'
import { useSortedPosts } from '../hooks/usePost'

import { getCountPage } from '../utils/pages'

import Pagination from '../Component/UI/Pagination/Pagination'
import PostFilter from '../Component/PostFilter/PostFilter'
import PostList from '../Component/PostList/PostList'
import Button from '../Component/UI/Button/Button'
import Loader from '../Component/UI/Loader/Loader'
import Modal from '../Component/UI/Modal/Modal'
import PostService from '../api/PostService'
import Form from '../Component/Form/Form'

import style from '../styles/App.module.scss'

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [visible, setVisible] = useState(false)
	const sortedAndSearchPosts = useSortedPosts(posts, filter.sort, filter.query)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)

	const [fetchPosts, isLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page)
			setPosts(response.data)

			const totalCount = response.headers['x-total-count']
			setTotalPages(getCountPage(totalCount, limit))
		}
	)

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setVisible(false)
	}

	const changePage = (post) => {
		setPage(post)
		fetchPosts(limit, page)
	}

	useEffect(() => {
		fetchPosts(limit, page)
	}, [])

	const deletePost = (post) => {
		setPosts(posts.filter((item) => item.id !== post.id))
	}

	return (
		<div className={style.wrapper}>
			<Button
				style={{ marginTop: '30px' }}
				onClick={() => setVisible(!visible)}
			>
				Создать пост
			</Button>
			<Modal visible={visible} setVisible={setVisible}>
				<Form createPost={createPost} />
			</Modal>
			<hr style={{ marginTop: '20px', marginBottom: '20px' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<>
				{postError && (
					<div>
						<h1>Произошла ошибка ${postError}</h1>
					</div>
				)}
				{isLoading ? (
					<div
						style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
					>
						<Loader />
					</div>
				) : (
					<PostList posts={sortedAndSearchPosts} deletePost={deletePost} />
				)}
				<Pagination
					totalPages={totalPages}
					changePage={changePage}
					page={page}
				/>
			</>
		</div>
	)
}

export default Posts
