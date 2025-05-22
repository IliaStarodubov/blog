import { getUser } from '../api/getUser';
import { sessions } from '../sessions';

export const authorize = async (authLogin: string, authPassword: string) => {
	const user = await getUser(authLogin);

	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			res: null,
		};
	}

	const { id, login, password, roleId } = user;

	if (authPassword !== password) {
		return {
			error: 'Пароль неверный',
			res: null,
		};
	}

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(user),
		},
	};
};
