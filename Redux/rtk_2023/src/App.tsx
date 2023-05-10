import { useState } from 'react'
import { useSelector } from 'react-redux'

// import { useActions } from './hooks/useActions'
import RecipeItem from './recipe-item/RecipeItem'
import { useCreateRecipeMutation } from './store/api/recipe.api'
import { IRecipeData } from './types/recipe.type'
import { useTypedSelector } from './hooks/useTypedSelector'
import { getUserById } from './store/user/user.actions'

const defaultValue: IRecipeData = {
	name: '',
	image: '',
}

const App: React.FC = () => {
	const [recipe, setRecipe] = useState<IRecipeData>(defaultValue)
	const { isLoading, error, user } = useTypedSelector((state) => state.user)

	const { createRecipe } = useCreateRecipeMutation()

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		createRecipe(recipe).then(() => {
			setRecipe(defaultValue)
		})
	}

	return (
		<>
			<button onClick={handleSubmit}>get user</button>
			{isLoading ? (
				<div>Loading</div>
			) : error ? (
				<div>{error}</div>
			) : user.name ? (
				<div>{user}</div>
			) : (
				''
			)}
			<div>
				<RecipeItem
					recipe={{
						id: 1,
						name: 'Лазанья',
					}}
				/>
				<RecipeItem
					recipe={{
						id: 2,
						name: 'Картошка',
					}}
				/>
				<RecipeItem
					recipe={{
						id: 3,
						name: 'Макароны',
					}}
				/>
			</div>
		</>
	)
}

export default App
