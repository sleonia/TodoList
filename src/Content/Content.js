import React from "react";
import "./Content.css";
import TodoList from "./Todolist/Todolist"

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
		this.fromLocalStorage();
	}
	
	toLocalStorage = () => {
		localStorage.setItem("data", JSON.stringify(this.state.data))
	}
	
	fromLocalStorage = () => {
		this.state.data = JSON.parse(localStorage.getItem("data"));
		this.state.data = !this.state.data ? JSON.parse("[]") : this.state.data;
	}

	addList = () => {
		this.setState(previousState => {
			//previousState.data.push(JSON.parse({
			previousState.data.push(({
					"id": 0,
					//"id": previousState.length().toString(),
					//"id": previousState.data .length().toString(),
					"tittle": "New list",
					"items": []
				}))
			})
			//this.state.data.push(JSON.parse(list));
		this.toLocalStorage();
		console.log(this.state.data);
		return this.state.data;
	}

	deleteList = (listId) => { /////////////
	}

	addItem = () => {
	}

	deleteItem = (itemId) => {
		
	}

	render () {
		return (
			<div className="content">
				{this.state.data.map((obj) => (
					<TodoList
						key={obj.id}
						id={obj.id}
						obj={obj}
						deleteList={() => this.deleteList(obj.id)}
					/>
				))}
				<button
					className="addList"
					onClick={() => this.addList()}>
					New list
				</button>
			</div>
		)
	};
};

export default Content;
