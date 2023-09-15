import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={280}
		height={465}
		viewBox="0 0 280 465"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="36" y="150" rx="0" ry="0" width="0" height="6" />
		<circle cx="136" cy="155" r="117" />
		<rect x="0" y="287" rx="4" ry="4" width="280" height="30" />
		<rect x="-1" y="327" rx="4" ry="4" width="280" height="88" />
		<rect x="0" y="425" rx="4" ry="4" width="135" height="30" />
		<rect x="143" y="424" rx="4" ry="4" width="135" height="30" />
	</ContentLoader>
)

export default Skeleton
