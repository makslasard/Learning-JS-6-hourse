import React from 'react'

import { useActions } from '../hooks/useActions'
import { useFavorites } from '../hooks/useFavorites'

const RecipeItem = ({ recipe }) => {
	const { favorites } = useFavorites()
	const { toggleFavorites } = useActions()

	const isExists = favorites.some((r) => r.id === recipe.id)

	return (
		<div>
			<h2>{recipe.name}</h2>
			<button onClick={() => toggleFavorites(recipe)}>
				{isExists ? 'Remove from favorites' : 'Add to favorites'}
			</button>
		</div>
	)
}

export default RecipeItem