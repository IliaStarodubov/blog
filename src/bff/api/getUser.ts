import { transformUser } from '../transformers/transformUser';

export const getUser = async (loginToFind: string) =>
	fetch(`http://localhost:3000/users?login=${loginToFind}`).then((loadedUser) =>
		loadedUser.json().then(([loadedUser]) => loadedUser && transformUser(loadedUser)),
	);
