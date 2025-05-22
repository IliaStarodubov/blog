import { sessions } from '../sessions';

export const logout = async (userSession: string | null) => {
	sessions.remove(userSession);
};
