export const deletSession = async (sessionId: string) => {
	fetch(`http://localhost:3000/sessions/${sessionId}`, {
		method: 'DELETE',
	});
};
