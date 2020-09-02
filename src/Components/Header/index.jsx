import React from 'react';
import style from './style.module.css';

function getTime() {
  const date = new Date();
  return date.toDateString();
}

const Header = () => (
  <header className={style.navbar}>
    <h2>{getTime()}</h2>
  </header>
);

export default Header;
