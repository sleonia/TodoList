import Actions from '../Constants/ActionTypes';

const initialState = JSON.parse(localStorage.getItem('data')) || [];

function toLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

const todos = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case Actions.AddItem:
      newState = [
        ...state,
        {
          id: state[state.length - 1] ? state[state.length - 1].id + 1 : 0,
          text: action.text,
          isCompleted: false,
        },
      ];
      toLocalStorage(newState);
      return newState;

    case Actions.ToggleItem:
      newState = state.map((todo) => (
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo));
      toLocalStorage(newState);
      return newState;

    case Actions.deleteItem:
      newState = [...state].filter((todo) => action.id !== todo.id);
      toLocalStorage(newState);
      return newState;

    default:
      return state;
  }
};

export default todos;
