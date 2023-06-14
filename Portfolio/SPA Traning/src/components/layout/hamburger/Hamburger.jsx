import { useState } from 'react';

import Menu from './Menu';

import { CgMenuRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

import styles from './Hamburger.module.scss';

const Hamburger = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <IoMdClose color="white" /> : <CgMenuRight color="white" />}
      </button>
      <Menu isShow={isShow} />
    </div>
  );
};

export default Hamburger;
