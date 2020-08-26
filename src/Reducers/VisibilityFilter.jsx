import Actions from '../Constants/ActionTypes';
import { VisibilityFilters } from '../Actions/index';

const visibilityFilter = (state = VisibilityFilters.ShowAll, action) => {
  switch (action.type) {
    case Actions.SetVisibilityFilter:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
