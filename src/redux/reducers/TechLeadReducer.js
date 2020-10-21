import { FETCH_TECH_LEADS } from '../constants/constants';

const initialState = {
	techLeads: []
};

export const getTechLeadsListReducers = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TECH_LEADS: {
			const newState = {
				...state,
				techLeads: action.payload
			};
			return newState;
		}
		default:
			return state;
	}
};
