import Actions from '../Constants/ActionTypes';

const initialState = JSON.parse(localStorage.getItem('data')) || [];

const todos = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case Actions.AddItem:
      newState = [
        ...state,
        {
          id: state[state.length - 1] ? state[state.length - 1].id + 1 : 0,
          text: action.payload,
          isCompleted: false,
        },
      ];
      return newState;

    case Actions.ToggleItem:
      newState = state.map((todo) => (
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo));
      return newState;

    case Actions.DeleteItem:
      newState = [...state].filter((todo) => action.payload !== todo.id);
      return newState;

    case Actions.SaveItem:
      newState = state.map((todo) => (
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo));
      return newState;

    default:
      return state;
  }
};

export default todos;
