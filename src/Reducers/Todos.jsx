import Actions from '../Constants/ActionTypes';

const initialState = JSON.parse(localStorage.getItem('data')) || [];

function toLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

const todos = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case Actions.AddItem:
      newState = [
        ...state,
        {
          id: state[state.length - 1] ? state[state.length - 1].id + 1 : 0,
          text: action.payload.text,
          isCompleted: false,
        },
      ];
      toLocalStorage(newState);
      return newState;

    case Actions.ToggleItem:
      newState = state.map((todo) => (
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo));
      toLocalStorage(newState);
      return newState;

    case Actions.DeleteItem:
      newState = [...state].filter((todo) => action.payload.id !== todo.id);
      toLocalStorage(newState);
      return newState;

    case Actions.SaveItem:
      console.log(action);
      newState = state.map((todo) => (
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo));
      toLocalStorage(newState);
      return newState;

    default:
      return state;
  }
};

export default todos;
