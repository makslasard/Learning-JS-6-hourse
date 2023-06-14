import { FiArrowLeft } from 'react-icons/fi';

import { useAuth } from '../../../hooks/useAuth';
import Hamburger from '../hamburger/Hamburger';
import styles from './Header.module.scss';

const Header = ({ bakcLink }) => {
  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      <button onClick={() => {}}>
        <FiArrowLeft />
      </button>
      {/* User Profile */}
      <Hamburger />
    </header>
  );
};

export default Header;
