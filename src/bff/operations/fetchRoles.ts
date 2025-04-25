import { getRoles } from '../api/getRoles';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const fetchRoles = async (hash: string) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
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
