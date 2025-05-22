import { server } from '../bff/server';
import { ACTION_TYPE } from './actionType';

export const logout = (session: string | null) => {
	server.logout(session);

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
