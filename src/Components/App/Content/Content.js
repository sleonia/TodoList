import React from "react";
import "./Content.css";
import TodoList from "./TodoList/TodoList"

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(localStorage.getItem("data")) || []
		}
	}
	
	toLocalStorage() {
		localStorage.setItem("data", JSON.stringify(this.state.data));
	}

	fromLocalStorage() { //useless?
		this.setState(() => {
			return JSON.parse(localStorage.getItem("data"));
		})
	}

	addList() {
		this.setState(state => {
			const data = state.data.push({
				id: state.data.length,
				title: "New list",
				items: []
			});
			this.toLocalStorage();
			return data;
		})
	}

	deleteList(listId) {
		this.setState(state => {
			delete state.data[listId];
			this.toLocalStorage();
			return state;
		})
	}

	addItem(listId) {
		console.log(this.state.data[listId]);
		this.setState(state => {
			let item = {
				id: state.data[listId].items.length || 0,
				text: " ",
				isCompleted: false
			};
			state.data[listId].items.push(JSON.parse(JSON.stringify(item)));
			this.toLocalStorage();
			return state;
		})
	}

	render () {
		return (
			<div className="content">
				{this.state.data.map(obj => (
					obj && (
						<TodoList
						key={obj.id}
						obj={obj}
						deleteList={() => this.deleteList(obj.id)}
						addItem={() => this.addItem(obj.id)}
						toLocalStorage={() => this.toLocalStorage()}
						/>
					)
				))}
				<button
					className="addList"
					onClick={() => this.addList()}>
					<p>New list</p>
				</button>
			</div>
		)
	};
};

export default Content;