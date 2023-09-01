import React from 'react'

import Post from './Post/Post'

const PostList = ({ posts, deletePost }) => {
	if (posts.length === 0) {
		return (
			<div style={{ textAlign: 'center', marginTop: '100px' }}>
				<h1>Посты не найдены!</h1>
			</div>
		)
	}

	return (
		<div>
			<h1>Список постов: </h1>
			{posts.map((post, index) => (
				<Post
					number={index + 1}
					key={post.id}
					post={post}
					deletePost={deletePost}
				/>
			))}
		</div>
	)
}

export default PostList
