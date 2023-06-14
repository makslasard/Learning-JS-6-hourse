import React from 'react';

import cn from 'clsx';
import menu from './menu.data';

import styles from './Hamburger.module.scss';
import { Link } from 'react-router-dom';

const Menu = ({isShow}) => {
  const logoutHandler = () => {};

  return (
    <div>
      <nav
        className={cn(styles.menu, {
          [styles.show]: isShow,
        })}>
        <ul>
          {menu.map((item, index) => (
            <li key={`_menu_${index}`}>
              {item.title}
              {/* <Link to={item.link}>{item.title}</Link> */}
            </li>
          ))}
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
