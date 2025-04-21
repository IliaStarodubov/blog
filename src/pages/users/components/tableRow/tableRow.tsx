import { ReactNode } from 'react';
import styled from 'styled-components';

const TableRowContainer = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => <div className={className}>{children}</div>;

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	width: 587px;
	border: ${({ border }) => (border ? '2px solid rgba(94, 12, 44, 0.8)' : 'none')};
	border-radius: ${({ border }) => (border ? '10px' : 'none')};

	& > div {
		padding: 0 10px;
	}

	& .login-column {
		width: 172px;
	}

	& .registre-at-column {
		width: 213px;
	}

	& .role-column {
		width: 158px;
	}
`;
