import { getComments } from '../api/getComments';
import { getPosts } from '../api/getPosts';
import { getCommentsCount } from '../utils/getCommentsCount';

export const fetchPosts = async (page, limit) => {
	const [{ posts, last }, comments] = await Promise.all([
		getPosts(page, limit),
		getComments(),
	]);

	return {
		error: null,
		res: {
			posts: posts.map((post) => ({
				...post,
				commentsCount: getCommentsCount(comments, post.id),
			})),
			last,
		},
	};
};
