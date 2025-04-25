import { addSession } from './api/addSession';
import { deletSession } from './api/deleteSession';
import { getSession } from './api/getSession';

export const sessions = {
	create(user) {
		const hash = Math.random().toFixed(50);

		addSession(hash, user);

		return hash;
	},
	async remove(hash) {
		const session = await getSession(hash);

		if (!session) {
			return;
		}

		deletSession(session.id);
	},
	async access(hash, accessRoles) {
		const session = await getSession(hash);

		return !!session.user && accessRoles.includes(session.user.roleId);
	},
};
