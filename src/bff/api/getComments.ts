import { transformComment } from '../transformers/transformComment';

export const getComments = async (postId: string) =>
	fetch(`http://localhost:3000/comments?post_id=${postId}`)
		.then((loadedComments) => loadedComments.json())
		.then((loadedComments) => loadedComments.map(transformComment));
