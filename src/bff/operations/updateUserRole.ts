import { setUserRole } from '../api/setUserRole';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const updateUserRole = async (
	hash: string,
	userId: string,
	newUserRoleId: number,
) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
