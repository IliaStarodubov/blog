import { setUserRole } from '../api/setUserRole';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const updateUserRole = async (
	userSession: string | null,
	userId: string,
	newUserRoleId: number,
) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
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
