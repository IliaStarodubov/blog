import { getRoles } from '../api/getRoles';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const fetchRoles = async (userSession: string | null) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const roles = await getRoles();

	return {
		error: null,
		res: roles,
	};
};
