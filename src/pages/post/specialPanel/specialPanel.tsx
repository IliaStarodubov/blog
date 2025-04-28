import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';
import { PATH_CALENDAR, PATH_DELETE } from '../../../constants/iconsPath';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../actions';
import { useServerRequest } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({
	className,
	id,
	publishedAt,
	editButton,
}: {
	className?: string;
	id: string;
	publishedAt?: string;
	editButton?: ReactNode;
}) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (id: string) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published_at">
				{publishedAt && (
					<Icon path={PATH_CALENDAR} size={25} margin="0 7px 0 0" />
				)}
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				{publishedAt && (
					<Icon
						isButton={true}
						onClick={() => onPostRemove(id)}
						size={25}
						path={PATH_DELETE}
						margin="0 7px 0 0"
					/>
				)}
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
