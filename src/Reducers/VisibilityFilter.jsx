import Actions from '../Constants/ActionTypes';

const visibilityFilter = (state = Actions.ShowAll, action) => {
  switch (action.type) {
    case Actions.ShowAll:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
