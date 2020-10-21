import { createStore } from 'redux';
import { getManagersListReducers } from '../reducers/ManagerReducer';
import { getTechLeadsListReducers } from '../reducers/TechLeadReducer';
import { getEmployeessListReducers } from '../reducers/EmployeeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	getManagersListReducers,
	getTechLeadsListReducers,
	getEmployeessListReducers
});

export const store = createStore(
	rootReducer,
	// getManagersListReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
