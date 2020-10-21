import { FETCH_MANAGERS } from '../constants/constants';

const getManagersListAction = managers => {
	return {
		type: FETCH_MANAGERS,
		payload: managers
	};
};

export default {
	getManagersListAction
};
