import { deletUser } from '../api/deleteUser';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const removeUser = async (userSession: string | null, userId: string) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	deletUser(userId);

	return {
		error: null,
		res: true,
	};
};
