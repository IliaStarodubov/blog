import { deleteComment } from '../api/deleteComment';
import { deletePost } from '../api/deletePost';
import { getComments } from '../api/getComments';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const removePost = async (hash: string, id: string) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deletePost(id);

	const comments = await getComments(id);

	await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

	return {
		error: null,
		res: true,
	};
};
