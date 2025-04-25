import styled from 'styled-components';
import { H2 } from '../../../components/h2/h2';
import { Icon } from '../../../components/icon/icon';
import {
	PATH_CALENDAR,
	PATH_DELETE,
	PATH_EDIT,
	PATH_EDIT1,
} from '../../../constants/iconsPath';

interface PostContentState {
	id: string;
	title: string;
	imageUrl?: string | undefined;
	publishedAt: string;
	content: string;
}

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, publishedAt, content },
}: {
	className?: string;
	post: PostContentState;
}) => {
	return (
		<div className={className}>
			<img src={imageUrl || undefined} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published_at">
					<Icon path={PATH_CALENDAR} size={25} margin="0 7px 0 0" />
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						onClick={() => {}}
						size={25}
						path={PATH_EDIT}
						path1={PATH_EDIT1}
						margin="0 13px 0 0"
					/>
					<Icon
						onClick={() => {}}
						size={25}
						path={PATH_DELETE}
						margin="0 7px 0 0"
					/>
				</div>
			</div>
			<div>{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		width: 400px;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		margin: -25px 0 15px 0;
		display: flex;
		justify-content: space-between;
	}

	& .published_at {
		font-size: 18px;
		display: flex;
	}

	& .buttons {
		display: flex;
	}
`;
