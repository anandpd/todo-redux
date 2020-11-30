import {create} from 'react-test-renderer';
import {createStore} from 'redux';
import {TodoReducer} from './Reducers/TodoReducer';

const store = createStore(TodoReducer);

export default store;
