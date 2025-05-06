import { deleteComment } from '../api/deleteComment';
import { getPost } from '../api/getPost';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';
import { getPostCommentsWithAutor } from '../utils/getPostCommentsWithAutor';

export const removePostComment = async (hash: string, postId: string, id: string) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deleteComment(id);

	const post = await getPost(postId);

	const commentsWithAutor = await getPostCommentsWithAutor(postId);

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAutor,
		},
	};
};
