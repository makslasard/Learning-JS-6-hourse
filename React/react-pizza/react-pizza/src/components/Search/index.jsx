import React from 'react';

import searchSvg from '../../assets/img/search.svg';
import closeSvg from '../../assets/img/close.svg';

import style from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={style.container}>
      <img className={style.search} src={searchSvg} alt="search" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={style.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={style.close}
          src={closeSvg}
          alt="search"
        />
      )}
    </div>
  );
};

export default Search;
