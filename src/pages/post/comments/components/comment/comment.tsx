import styled from 'styled-components';
import { Icon } from '../../../../../components/icon/icon';
import {
	PATH_CALENDAR,
	PATH_DELETE,
	PATH_USER,
	PATH_USER1,
} from '../../../../../constants/iconsPath';

const CommentContainer = ({
	className,
	id,
	autor,
	content,
	publishedAt,
}: {
	className?: string;
	id: string;
	autor: string;
	content: string;
	publishedAt: string;
}) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							path={PATH_USER}
							path1={PATH_USER1}
							size={25}
							margin="0 7px 0 0"
						/>
						{autor}
					</div>
					<div className="published-at">
						<Icon path={PATH_CALENDAR} size={25} margin="0 7px 0 0" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				onClick={() => {}}
				size={25}
				path={PATH_DELETE}
				margin="14px 0 0 10px;"
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;

	& .comment {
		width: 580px;
		margin: 10px auto;
		padding: 15px;

		font-size: 18px;
		border-radius: 10px;
		box-shadow: 0px 0px 36px 17px rgb(233 233 233 / 82%);
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
