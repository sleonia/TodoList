import Actions from "../Constants/ActionTypes";
//import * as types from "../Constants/ActionTypes"

function todos(state = [], action) { //variable and anonim func???
	switch (action.type) {
		//case types.AddItem:
		case Actions.AddItem:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					isCompleted: false
				}
			];

		//case types.ToggleTodo:
		case Actions.ToggleTodo:
			return state.map(todo =>  //find???
				todo.id === action.id
				? { ...todo, isCompleted: !todo.isCompleted }
				: { todo }
			)

		default:
			return state;
	}
}

export default todos;