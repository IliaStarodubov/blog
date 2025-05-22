export const getCommentsCount = (comments = [], postId: string) => {
	const postComments = comments.filter(
		({ postId: commentPostId }) => commentPostId === postId,
	);

	return postComments.length;
};
