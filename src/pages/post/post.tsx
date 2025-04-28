import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent } from './postContent/postContent';
import { Comments } from './comments/comments';
import { useMatch, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import styled from 'styled-components';
import { PostForm } from './postForm/postForm';

const PostContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer]);

	return (
		<div className={className}>
			{isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 0px 80px;
	margin: 40px 0;
`;
