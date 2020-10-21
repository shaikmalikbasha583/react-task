import { FETCH_TECH_LEADS } from '../constants/constants';

export const getTechLeadsListAction = techLeads => {
	return {
		type: FETCH_TECH_LEADS,
		payload: techLeads
	};
};
