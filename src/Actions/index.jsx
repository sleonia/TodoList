import Actions from '../Constants/ActionTypes';

export const addItem = (text) => ({
  type: Actions.AddItem,
  id: 0,
  text,
});

export const deleteItem = (id) => ({
  type: Actions.deleteItem,
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: Actions.SetVisibilityFilter,
  filter,
});

export const toggleItem = (id) => ({
  type: Actions.ToggleItem,
  id,
});

export const VisibilityFilters = {
  ShowAll: Actions.ShowAll,
  ShowCompleted: Actions.ShowCompleted,
  ShowActive: Actions.ShowActive,
};
