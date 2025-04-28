export const updatePost = ({
	id,
	imageUrl,
	title,
	content,
}: {
	id: string;
	imageUrl: string;
	title: string;
	content: string;
}) =>
	fetch(`http://localhost:3000/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	}).then((loadedPost) => loadedPost.json());
