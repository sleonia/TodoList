import Actions from '../Constants/ActionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case Actions.AddItem:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: false,
        },
      ];

    case Actions.ToggleItem:
      return state.map((todo) => (
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo));

    default:
      return state;
  }
};

export default todos;
