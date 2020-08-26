import React from 'react';
// import "./Header.css"

class Header extends React.Component {
  getTime() {
    this.date = new Date();
    return this.date.toDateString();
  }

  render() {
    return (
      <header className="navbar">
        <h2>{this.getTime()}</h2>
      </header>
    );
  }
}

export default Header;
