import { transformPost } from '../transformers/transformPost';

export const getPost = async (postId: string) =>
	fetch(`http://localhost:3000/posts/${postId}`)
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
