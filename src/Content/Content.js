import React from "react";
import "./Content.css";
import TodoList from "./Todolist/Todolist"

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(localStorage.getItem("data")) || []
			//data: !this.fromLocalStorage() ? [] : this.fromLocalStorage() //////////???????????????
		}
		console.log(this.state.data);
		//console.log(JSON.parse(localStorage.getItem("data")));
	}
	
	toLocalStorage = () => {
		localStorage.setItem("data", JSON.stringify(this.state.data));
	}
	
	fromLocalStorage = () => {
		this.setState(() => {
			const data = JSON.parse(localStorage.getItem("data"));
			console.log(data);
			return data;
		})
	}

	addList = () => {
		this.setState(state => {
			const data = state.data.push(<p>AAAA</p>);
			this.toLocalStorage();
			console.log(state.data);
			return data;
		})
	}

	deleteList = (listId) => {
		this.setState(state => {
			const data = state.data.pop();
			this.toLocalStorage();
			//const data = state.data.pop(0, listId);
			return data;
		})
	}

	addItem = () => {
	}

	deleteItem = (itemId) => {
		
	}

	render () {
		return (<div>
			<button onClick={this.addList}>ADD</button>
			<button onClick={this.deleteList}>DELETE</button>
			<ul>
			{this.state.data.map((item) => (
				<li key={item}>{item.props.children}</li>
				//console.log(item);
			))}
			</ul>
		</div>)
	};
};

export default Content;
