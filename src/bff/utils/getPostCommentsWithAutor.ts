import { getComments } from '../api/getComments';
import { getUsers } from '../api/getUsers';

export const getPostCommentsWithAutor = async (postId) => {
	const comments = await getComments(postId);

	const users = await getUsers();

	return comments.map((comment) => {
		const user = users.find(({ id }: { id: string }) => id === comment.autorId);

		return {
			...comment,
			autor: user?.login,
		};
	});
};
