import { getUsers } from '../api/getUsers';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const fetchUsers = async (hash: string) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
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
