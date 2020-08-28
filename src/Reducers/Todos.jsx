import Actions from '../Constants/ActionTypes';

const initialState = JSON.parse(localStorage.getItem('data')) || [];

function toLocalStorage(state) {
  localStorage.setItem('data', JSON.stringify(state));
}

function idUpdate(state) {///// crutch
  state.map((todo, id) => {
    todo.id = id;
    return todo.id;
  });
}

const todos = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case Actions.AddItem:
      newState = [
        ...state,
        {
          id: action.id,
          // id: state.length,
          text: action.text,
          isCompleted: false,
        },
      ];
      idUpdate(state);
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
      newState = [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      ];
      idUpdate(state);
      toLocalStorage(newState);
      return newState;

    default:
      return state;
  }
};

export default todos;
