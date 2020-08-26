import React from "react";
//import "./Header.css"

class Header extends React.Component {
	getTime() {
		let date = new Date();
		return date.getUTCFullYear();///////
	}

	render () {
		return (
			<header className="navbar">
				<h2>{this.getTime()}</h2>
			</header >
		);
	};
};

export default Header;