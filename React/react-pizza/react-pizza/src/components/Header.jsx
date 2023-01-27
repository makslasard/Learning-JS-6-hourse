import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

import logoSvg from '../assets/img/pizza-logo.svg';
import basketSvg from '../assets/img/basket.svg';

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width="38" src={logoSvg} alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span>520 ₽</span>
              <div className="button__delimiter"></div>
              <img src={basketSvg} alt="basket" />
              <span>3</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
