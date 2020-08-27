import Actions from '../Constants/ActionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case Actions.AddItem:
      return [
        ...state,
        {
          //id: action.id,
          id: state.length,
          text: action.text,
          isCompleted: false,
        },
      ];

    case Actions.ToggleItem:
      return state.map((todo) => (
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo));

    case Actions.deleteItem:
      const stateTemp = [ // bad?????
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];
      return stateTemp;

    default:
      return state;
  }
};

export default todos;
