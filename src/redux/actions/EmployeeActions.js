import { FETCH_EMPLOYEES } from '../constants/constants';

export const getEmployeesListAction = employees => {
	return {
		type: FETCH_EMPLOYEES,
		payload: employees
	};
};
