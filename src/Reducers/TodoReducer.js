import {ADD, REMOVE, EDIT, COMPLETED} from '../ActionTypes';
import {TODOS} from '../TODOS';

let initialState = TODOS;

export const TodoReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD:
      return [...state, payload];

    case REMOVE:
      return state.filter((each) => each.id !== payload.id);

    case EDIT:
      return state;

    case COMPLETED:
      state.filter((each) => each.id === payload.id)[0].isCompleted = true;
      console.log(state);
      return state;

    default:
      return state;
  }
};
