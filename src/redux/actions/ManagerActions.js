import { FETCH_MANAGERS } from '../constants/constants';

export const getManagersListAction = managers => {
	return {
		type: FETCH_MANAGERS,
		payload: managers
	};
};
