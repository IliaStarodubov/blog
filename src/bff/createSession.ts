import { ROLE } from '../constants/role';
import { removeComment } from './sessions/removeComment';

interface Session {
	logout(): void;
	removeComment?: typeof removeComment;
}

export const createSession = (roleId: number) => {
	const session: Session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key as keyof Session];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}

		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}

		case ROLE.READER: {
			break;
		}

		default:
		// ничего не делать
	}

	return session;
};
