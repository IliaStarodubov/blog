import { addUser } from './addUser';
import { createSession } from './createSession';
import { getUser } from './getUser';

export const server = {
	async authorize(authLogin: string, authPassword: string) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Пароль неверный',
				res: null,
			};
		}

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},

	async register(regLogin: string, regPassword: string) {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
