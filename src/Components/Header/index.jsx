import React from 'react';
import style from './style.module.css';

class Header extends React.Component {
  getTime() {
    this.date = new Date();
    return this.date.toDateString();
  }

  render() {
    return (
      <header className={style.navbar}>
        <h2>{this.getTime()}</h2>
      </header>
    );
  }
}

export default Header;
