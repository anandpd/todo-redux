import {REMOVE} from '../ActionTypes';

const deleteToDo = (id) => {
  return {
    type: REMOVE,
    payload: {
      id: id,
    },
  };
};

export default deleteToDo;
