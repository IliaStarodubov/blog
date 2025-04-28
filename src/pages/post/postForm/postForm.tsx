import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';
import { PATH_SAVE, PATH_SAVE1 } from '../../../constants/iconsPath';
import { Input } from '../../../components/input/input';
import { SpecialPanel } from '../specialPanel/specialPanel';
import { useRef } from 'react';
import { sanitizeContent } from './utils/sanitizeContent';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../hooks';
import { savePostAsync } from '../../../actions';

interface PostContentState {
	id?: string;
	title?: string;
	imageUrl?: string | undefined;
	publishedAt?: string;
	content?: string;
}

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, publishedAt, content },
}: {
	className?: string;
	post: PostContentState;
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${id}`));
	};

	return (
		<div className={className}>
			<Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..." />
			<Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
			<SpecialPanel
				publishedAt={publishedAt}
				margin="15px 0"
				editButton={
					<Icon
						onClick={onSave}
						size={25}
						path={PATH_SAVE}
						path1={PATH_SAVE1}
						margin="0 13px 0 0"
					/>
				}
			/>
			<div
				ref={contentRef}
				className="post-text"
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		width: 400px;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		margin: 15px 0;
		display: flex;
		justify-content: space-between;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
