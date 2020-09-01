import React from 'react';
import style from './style.module.css';

const Header = () => {
  function getTime() {
      const date = new Date();
      return date.toDateString();
  };

  return (
    <header className={style.navbar}>
      <h2>{getTime()}</h2>
    </header>
  );
};

export default Header;
