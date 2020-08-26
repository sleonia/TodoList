import Actions from '../Constants/ActionTypes';

let nextTodoId = 0;
export const addItem = (text) => ({
  type: Actions.AddItem,
  id: nextTodoId++,
  // id: (() => { nextTodoId++; }),
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
