import styled from 'styled-components';

interface IconContainerProps {
	className?: string;
	size?: number;
	path?: string;
	path1?: string;
	path2?: string;
	margin?: string;
}

const IconContainer = ({
	className,
	size = 35,
	path,
	path1,
	path2,
}: IconContainerProps) => (
	<div className={className}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={`${size}`}
			height={`${size}`}
			fill="currentColor"
			viewBox="0 0 16 16"
		>
			{path && <path d={path} />}
			{path1 && <path d={path1} />}
			{path2 && <path d={path2} />}
		</svg>
	</div>
);

export const Icon = styled(IconContainer)`
	margin: ${({ margin }) => margin};
	&:active {
		color: #c0144e;
	}
`;
