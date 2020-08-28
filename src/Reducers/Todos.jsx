import Actions from '../Constants/ActionTypes';

const initialState = JSON.parse(localStorage.getItem('data')) || [];

function toLocalStorage(state) {
  localStorage.setItem('data', JSON.stringify(state));
}

function idUpdate(state) {///// crutch
  let i = 0;
  state.map((todo) => {
    console.log(`1: id = ${todo.id} i = ${i}`);
    todo.id = i++;
    console.log(`2: id = ${todo.id} i = ${i}`);
    console.log();
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
      toLocalStorage(newState);
      idUpdate(newState);
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
      idUpdate(newState);
      toLocalStorage(newState);
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

export default todos;
