import { generateDate } from '../utils/generateDate';

export const addComment = (userId: string, postId: string, content: string) =>
	fetch('http://localhost:3000/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			autor_id: userId,
			post_id: postId,
			published_at: generateDate(),
			content,
		}),
	});
