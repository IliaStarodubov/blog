export const transformComment = (dbComment) => ({
	id: dbComment.id,
	autorId: dbComment.autor_id,
	postId: dbComment.post_id,
	publishedAt: dbComment.published_at,
	content: dbComment.content,
});
