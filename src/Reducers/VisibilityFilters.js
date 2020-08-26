import { VisibilityFilters } from "../Actions/index"
import Actions from "../Constants/ActionTypes";

const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case "Actions.SET_VISIBILITY_FILTER":
			return action.filter
		default:
			return state
	}
}

export default VisibilityFilter;