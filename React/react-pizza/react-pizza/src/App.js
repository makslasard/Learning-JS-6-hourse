import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

import './scss/app.scss';

// import data from './mock/data.json'

const App = () => {
  const [searchValue, setSearchValue] = useState('')

  const SearchContext = React.createContext('')

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;