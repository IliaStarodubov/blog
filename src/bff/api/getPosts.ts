import { transformPost } from '../transformers/transformPost';

export const getPosts = (page, limit) =>
	fetch(`http://localhost:3000/posts?_page=${page}&_per_page=${limit}`)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => ({
			posts: loadedPosts.data && loadedPosts.data.map(transformPost),
			last: loadedPosts.last,
		}));
// .then((loadedPosts) => loadedPosts.data && loadedPosts.data.map(transformPost));
