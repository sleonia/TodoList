import Actions from '../Constants/ActionTypes';

export const addItem = (text) => ({
  type: Actions.AddItem,
  payload: text,
});

export const deleteItem = (id) => ({
  type: Actions.DeleteItem,
  payload: id,
});

export const saveItem = (text, id) => ({
  type: Actions.SaveItem,
  payload: {
    text,
    id,
  },
});

export const setVisibilityFilter = (filter) => ({
  type: Actions.SetVisibilityFilter,
  payload: filter,
});

export const toggleItem = (id) => ({
  type: Actions.ToggleItem,
  payload: id,
});
