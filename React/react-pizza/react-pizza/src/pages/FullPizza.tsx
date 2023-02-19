import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

interface IPizza {
	id: number
	description: string
	price: number
}

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<IPizza>()

	const { id } = useParams()
	const navigate = useNavigate()

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					`https://63c03f0ce262345656fb3d97.mockapi.io/items/3` + id
				)
				setPizza(data)
			} catch (e) {
				alert('Ошибка при получении пиццы')
				navigate('/') // по типу dispatch только для react-router. 'При ошибке перейти на главную'
			}
		}

		fetchPizza()
	}, [])

	if (!pizza) return <>Загрузка...</>

	return (
		<div className="container">
			<h1>Пицца номер {id}</h1>
			<p>{pizza.description}</p>
			<p>{pizza.price}</p>
			<button>Добавить пиццу</button>
		</div>
	)
}

export default FullPizza
