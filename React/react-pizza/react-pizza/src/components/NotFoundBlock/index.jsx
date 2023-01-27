import React from 'react';

import style from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={style.container}>
      <h1>Ничего не найдено :(</h1>
      <p>
        Вы зашли на страницу который не существует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
