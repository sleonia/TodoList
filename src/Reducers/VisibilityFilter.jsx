import Actions from '../Constants/ActionTypes';

const visibilityFilter = (state = Actions.SHOW_ALL, action) => {
  switch (action.type) {
    case Actions.SHOW_ALL:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
