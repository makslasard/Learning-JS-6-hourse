import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from '../../pages/NotFound'
import App from '../../App'
import Posts from '../../pages/Posts'
import About from '../../pages/About'
import PostIdPage from '../PostList/PostIdPage/PostIdPage'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<App />} />
			<Route path="/posts" element={<Posts />} />
			<Route path="/posts/:id" element={<PostIdPage />} />
			<Route path="/about" element={<About />} />
		</Routes>
	)
}

export default AppRouter
