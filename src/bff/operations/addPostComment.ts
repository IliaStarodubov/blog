import { addComment } from '../api/addComment';
import { getPost } from '../api/getPost';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';
import { getPostCommentsWithAutor } from '../utils/getPostCommentsWithAutor';

export const addPostComment = async (
	hash: string,
	userId: string,
	postId: string,
	content: string,
) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await addComment(userId, postId, content);

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
