import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Search from './Search'

import logoSvg from '../assets/img/pizza-logo.svg'
import basketSvg from '../assets/img/basket.svg'
import { selectCart } from '../redux/slices/cartSlice'

const Header: React.FC = () => {
	const { totalPrice, items } = useSelector(selectCart)
	const location = useLocation()

	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	)

	return (
		<div>
			<div className="header">
				<div className="container">
					<Link to="/">
						<div className="header__logo">
							<img width={38} height={38} src={logoSvg} alt="Pizza logo" />
							<div>
								<h1>React Pizza</h1>
								<p>самая вкусная пицца во вселенной</p>
							</div>
						</div>
					</Link>
					<Search />
					<div className="header__cart">
						{location.pathname !== '/cart' && (
							<Link to="/cart" className="button button--cart">
								<span>{totalPrice}₽</span>
								<div className="button__delimiter"></div>
								<img src={basketSvg} alt="basket" />
								<span>{totalCount}</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
