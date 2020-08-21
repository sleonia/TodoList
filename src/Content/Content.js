import React from "react";
import "./Content.css";
import TodoList from "./Todolist/Todolist"

class Content extends React.Component {
	constructor(props) {
		super(props);
		let content = localStorage.getItem("content");
		let tmp = {
			lists: []
		}
		this.state = {
				data: !content
						? localStorage.setItem("content", JSON.stringify(tmp))
						: content,
					
				json: JSON.parse(!content
									? JSON.stringify(content)
									: JSON.stringify(tmp))
			}
		//console.log(this.state.json);
		//console.log(this.state.json.lists);
	}

	addList = () => {
		this.setState(previousState => {
			previousState.json.lists.push({
				"id": previousState.json.lists.length.toString(),
				"title": "New List",
				"items": [{
					"id": "0",
					"text": "",
					"completed": "false"
				}]
			})
			return this.state;
		})
	}

	deleteList = (listId) => {
		this.setState(previousState => {
			localStorage.removeItem(listId);
			delete previousState.lists[listId];
			return this.state;
		})
	}

	render () {
		return (
			<div className="content">
				{this.state.json.lists.map((obj) => (
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
