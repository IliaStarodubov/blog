import { ACTION_TYPE } from '../actions';
import { ROLE } from '../constants/role';
import { UserState } from '../types/store';

const initialState: UserState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	session: null,
};

export const userReducer = (state: UserState = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.LOGOUT:
			return initialState;

		default:
			return state;
	}
};
