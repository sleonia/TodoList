import Actions from '../Constants/ActionTypes';

export const addItem = (text) => ({
  type: Actions.ADD_ITEM,
  payload: text,
});

export const deleteItem = (id) => ({
  type: Actions.DELETE_ITEM,
  payload: id,
});

export const updateItem = (text, id) => ({
  type: Actions.UPDATE_ITEM,
  payload: {
    text,
    id,
  },
});

export const setVisibilityFilter = (filter) => ({
  type: Actions.SET_VISIBILITY_FILTER,
  payload: filter,
});

export const toggleItem = (id) => ({
  type: Actions.TOGGLE_ITEM,
  payload: id,
});
