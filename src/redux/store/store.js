import { createStore } from 'redux';
import { getManagersListReducers } from '../reducers/ManagerReducer';

export const store = createStore(
	getManagersListReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
