import { getPost } from '../api/getPost';
import { getPostCommentsWithAutor } from '../utils/getPostCommentsWithAutor';

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

	const commentsWithAutor = await getPostCommentsWithAutor(postId);

	return {
		error: null,
		res: { ...post, comments: commentsWithAutor },
	};
};
