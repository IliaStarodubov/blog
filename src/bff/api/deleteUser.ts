export const deletUser = (userId: string) =>
	fetch(`http://localhost:3000/users/${userId}`, {
		method: 'DELETE',
	});
