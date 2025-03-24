import styled from 'styled-components';
import { Icon } from '../../../icon/icon';
import {
	PATH_ARROW,
	PATH_ARROW1,
	PATH_NOTE,
	PATH_NOTE1,
	PATH_NOTE2,
	PATH_PEOPLE,
} from '../../../../constants/iconsPath';
import { Link, useNavigate } from 'react-router-dom';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Button = styled.button`
	font-size: 18px;
	width: 120px;
	height: 48px;
	background-color: #753047;
	border-radius: 16px;

	&:hover {
		opacity: 0.9;
	}
`;

const StyledBtn = styled.div`
	&: hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({ className }: { className?: string }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<Link to="/login">
					<Button>Войти</Button>
				</Link>
			</RightAligned>
			<RightAligned>
				<StyledBtn onClick={() => navigate(-1)}>
					<Icon path={PATH_ARROW} path1={PATH_ARROW1} margin="8px 0 0 9px" />
				</StyledBtn>

				<Link to="/post">
					<Icon
						path={PATH_NOTE}
						path1={PATH_NOTE1}
						path2={PATH_NOTE2}
						size={30}
						margin="11px 0 0 9px"
					/>
				</Link>
				<Link to="/users">
					<Icon path={PATH_PEOPLE} margin="10px 0 0 9px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
