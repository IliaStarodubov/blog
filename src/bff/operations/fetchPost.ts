import { getComments } from '../api/getComments';
import { getPost } from '../api/getPost';
import { getUsers } from '../api/getUsers';

export const fetchPost = async (postId: string) => {
	let post;
	let error;

	try {
		post = await getPost(postId);
	} catch (postError) {
		error = postError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

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
