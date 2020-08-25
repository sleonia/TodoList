import { combineReducers } from 'redux';
import Actions from "../Constants/ActionTypes"

/*
[
	{
		"title": "day1",
		"items": [
			{
				"text": "Do",
				"completed": "true"
			}
		]
	}
]
*/

const initialState = [];

export default function todo(state = initialState, action) {
	switch (action.type) {
		case Actions.addList: {
			return {
				state: state.concat({}) //????
			}
		}

		case Actions.deleteList: {
			return ;
		}

		case Actions.addItem: {
			return ;
		}

		case Actions.deleteItem: {
			return ;
		}

		default:
			return state;
	}
}

//export default combineReducers({
//});
