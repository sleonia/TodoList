import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Michael";
var nameUser = () => "Franklin";
const element = <h1>Здравствуй, {name}</h1>;
const element_2 = <h1>Здравствуй, {nameUser()}</h1>;

ReactDOM.render(element, document.getElementById("root"));
ReactDOM.render(element_2, document.getElementById("root_2"));


//ReactDOM.render(
	//<h1>Здравствуй, User</h1>, document.getElementById('root')
//);

