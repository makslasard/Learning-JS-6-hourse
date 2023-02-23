import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
	selectFilter,
	setCategoryId,
	setCurrentPage,
} from '../redux/slices/filterSlice'

import { fetchPizzas } from '../redux/slices/pizzaSlice'

import { selectPizza } from '../redux/slices/cartSlice'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/Skeleton'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../components/Pagination'
import CartEmty from '../components/CartEmty'

const Home: React.FC = () => {
	const { items, status } = useSelector(selectPizza)
	const { categoryId, sortType, currentPage, searchValue } =
		useSelector(selectFilter)

	const dispatch = useDispatch()

	const onChangeCategory = (id: number) => {
		dispatch(setCategoryId(id))
	}

	const onChangePage = (value: number) => {
		dispatch(setCurrentPage(value))
	}

	const [isLoading, setIsLoading] = useState(true)

	const getPizzas = async () => {
		setIsLoading(true)

		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.sortProperty.replace('-', '')
		const category = categoryId > 0 ? `category=${categoryId}` : ''
		const search = searchValue ? `&search=${searchValue}` : ''

		dispatch(
			// @ts-ignore
			fetchPizzas({
				order,
				sortBy,
				category,
				search,
			})
		)

		window.scrollTo(0, 0)
	}

	useEffect(() => {
		if (window.location.search) {
			getPizzas()
		}
	}, [])

	const pizzas = items.map((obj: any) => (
		<Link key={obj.id} to={`/pizza/${obj.id}`}>
			<PizzaBlock {...obj} />
		</Link>
	))
	const skeletons = [...new Array(10)].map((_, index) => (
		<Skeleton key={index} />
	))

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			{status === 'error' ? (
				<CartEmty />
			) : (
				<div className="content__items">
					{status === 'loading' ? skeletons : pizzas}
				</div>
			)}

			<Pagination value={currentPage} onChangePage={onChangePage} />
		</div>
	)
}

export default Home
