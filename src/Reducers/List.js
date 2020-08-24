import Actions from "../Actions/Actions";
import { Provider } from 'react-redux';
import { createStore } from 'redux';


class Action { ////////func or class?????
	constructor(state, action) {
		this.store = createStore(this.reducer);
	}

	reducer() {	
		switch (action.type) {
			case Actions.AddList:
				;
			case Actions.DeleteList:
				;
			case Actions.AddItem:
				;
			case Actions.DeleteItem:
				;
		}
	}
}

export default Action;