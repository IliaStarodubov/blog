import { getUsers } from '../api/getUsers';
import { ROLE } from '../constants/role';

import { sessions } from '../sessions';

export const fetchUsers = async (userSession: string | null) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
