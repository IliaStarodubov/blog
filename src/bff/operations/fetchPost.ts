import { getComments } from '../api/getComments';
import { getPost } from '../api/getPost';
import { getUsers } from '../api/getUsers';

export const fetchPost = async (postId: string) => {
	const post = await getPost(postId);

	const comments = await getComments(postId);

	const users = await getUsers();

	const commentsWithAutor = comments.map((comment) => {
		const user = users.find(({ id }: { id: string }) => id === comment.autorId);

		return {
			...comment,
			autor: user?.login,
		};
	});

	return {
		error: null,
		res: { ...post, comments: commentsWithAutor },
	};
};
