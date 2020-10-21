// import getManagersListReducers from '../actions/ManagerActions';
import { FETCH_MANAGERS } from '../constants/constants';

const initialState = {
	managers: []
};

export const getManagersListReducers = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MANAGERS: {
			const newState = {
				...state,
				managers: action.payload
			};
			return newState;
		}
		default:
			return state;
	}
};
