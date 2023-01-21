import React, { useState, useEffect } from 'react';

import './scss/app.scss';

import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

// import data from './mock/data.json'

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://63c03f0ce262345656fb3d97.mockapi.io/items')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
