import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../../hooks/useFetching'
import PostService from '../../../api/PostService'
import Loader from '../../UI/Loader/Loader'

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostByID, isLoading, isError] = useFetching(async (id) => {
		const response = await PostService.getPostByID(id)
		setPost(response.data)
	})

	const [fetchCommentPostByID, commentIsLoading, commentIsError] = useFetching(
		async (id) => {
			const response = await PostService.getCommentPostByID(id)
			setComments(response.data)
		}
	)

	useEffect(() => {
		fetchPostByID(params.id)
		fetchCommentPostByID(params.id)
	}, [])

	return (
		<div>
			<h1>Страница поста c ID = {params.id}</h1>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					{post.id}. {post.title}
				</div>
			)}
			<div>
				{isLoading ? (
					''
				) : (
					<div>
						<h1 style={{ marginTop: '15px' }}>Комментарии:</h1>
						{comments.map((item) => (
							<div style={{ marginTop: '15px' }}>
								<h5>{item.email}</h5>
								<div>{item.body}</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default PostIdPage
