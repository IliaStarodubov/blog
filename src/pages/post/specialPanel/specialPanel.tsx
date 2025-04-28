import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';
import { PATH_CALENDAR, PATH_DELETE } from '../../../constants/iconsPath';
import { ReactNode } from 'react';

const SpecialPanelContainer = ({
	className,
	publishedAt,
	editButton,
}: {
	className?: string;
	publishedAt?: string;
	editButton?: ReactNode;
}) => {
	return (
		<div className={className}>
			<div className="published_at">
				<Icon path={PATH_CALENDAR} size={25} margin="0 7px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					onClick={() => {}}
					size={25}
					path={PATH_DELETE}
					margin="0 7px 0 0"
				/>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: ${({ margin }) => margin};
	display: flex;
	justify-content: space-between;

	& .published_at {
		font-size: 18px;
		display: flex;
	}

	& .buttons {
		display: flex;
	}
`;
