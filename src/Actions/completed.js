import {COMPLETED} from '../ActionTypes';

const todoCompleted = (id) => {
  return {
    type: COMPLETED,
    payload: {
      id: id,
    },
  };
};

export default todoCompleted;
