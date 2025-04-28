import { getComments } from '../api/getComments';
import { getPosts } from '../api/getPosts';
import { getCommentsCount } from '../utils/getCommentsCount';

export const fetchPosts = async () => {
	const [posts, comments] = await Promise.all([getPosts(), getComments()]);

	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
	};
};
