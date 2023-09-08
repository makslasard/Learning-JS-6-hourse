import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../types/recipe.type'

const API_URL = 'https://localhost:4300//recipes'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Recipe'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (builder) => ({
		getRecipes: builder.query<IRecipe | null>({
			query: () => '/',
			providesTags: () => [
				{
					type: 'Recipe',
				},
			],
		}),
	}),
})

export const { useGetRecipesQuery } = api

/*
baseQuery - базовый url куда будут идти запросы
tagTypes - для валидации. Когда мы добавим рецепт, у нас обновились все рецепты. Список переобновился

endpoints: builder.mutatiion - для того чтобы мы делали добавление, обновление, удаление и т.д
endpoints: builder.query - для того чтобы мы могли получать посты и т.д
*/
