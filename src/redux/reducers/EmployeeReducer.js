import { FETCH_EMPLOYEES } from '../constants/constants';

const initialState = {
	employees: []
};

export const getEmployeessListReducers = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_EMPLOYEES: {
			const newState = {
				...state,
				employees: action.payload
			};
			return newState;
		}
		default:
			return state;
	}
};
