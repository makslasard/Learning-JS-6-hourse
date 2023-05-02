import RecipeItem from './recipe-item/RecipeItem'

const App = () => {
	return (
		<>
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
