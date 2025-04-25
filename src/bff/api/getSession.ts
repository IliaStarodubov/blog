import { transformSession } from '../transformers/transformSession';

export const getSession = async (hash: string) =>
	fetch(`http://localhost:3000/sessions?hash=${hash}`)
		.then((loadedSessions) => loadedSessions.json())
		.then(([loadedSessions]) => loadedSessions && transformSession(loadedSessions));
