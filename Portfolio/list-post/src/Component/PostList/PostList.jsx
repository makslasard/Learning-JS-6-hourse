import React from 'react'

import Post from './Post/Post'

const PostList = (props) => {
	const { deletePost } = props
	return (
		<div>
			<h1>Список постов: </h1>
			{props.posts.map((post, index) => (
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
