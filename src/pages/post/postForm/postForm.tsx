import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';
import { PATH_SAVE, PATH_SAVE1 } from '../../../constants/iconsPath';
import { Input } from '../../../components/input/input';
import { SpecialPanel } from '../specialPanel/specialPanel';
import { useLayoutEffect, useRef, useState } from 'react';
import { sanitizeContent } from './utils/sanitizeContent';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../hooks';
import { savePostAsync } from '../../../actions';

interface PostContentState {
	id: string;
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
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);

	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок..."
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="15px 0"
				editButton={
					<Icon
						isButton={true}
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
		padding: 10px 15px;
		min-height: 100px;
		font-size: 18px;
		white-space: pre-line;
		border-radius: 15px;
		border: 1px solid #eee;
	}
`;
