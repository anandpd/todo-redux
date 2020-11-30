import {ADD} from '../ActionTypes';

const addTodo = (newToDo, id, isCompleted = false, editField = false) => {
  return {
    type: ADD,
    payload: {
      id: id,
      item: newToDo,
      isCompleted: isCompleted,
      editField: editField,
    },
  };
};

export default addTodo;
