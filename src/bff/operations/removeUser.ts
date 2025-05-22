import { deletUser } from '../api/deleteUser';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const removeUser = async (hash: string, userId: string) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
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
