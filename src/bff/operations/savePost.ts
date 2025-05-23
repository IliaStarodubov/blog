import { addPost } from '../api/appPost';
import { updatePost } from '../api/updatePost';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const savePost = async (hash: string, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const savedPost =
		newPostData.id === ''
			? await addPost(newPostData)
			: await updatePost(newPostData);

	return {
		error: null,
		res: savedPost,
	};
};
