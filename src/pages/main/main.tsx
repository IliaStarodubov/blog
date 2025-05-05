import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './components/postCard/postCard';
import { Pagination } from './components/pagination/Pagination';
import { PAGINATION_LIMIT } from '../../constants/paginationlimit';

const MainContainer = ({ className }: { className?: string }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(
			({ res: { posts, last } }) => {
				setPosts(posts);
				setLastPage(last);
			},
		);
	}, [page, requestServer]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
						imageUrl={imageUrl}
					/>
				))}
			</div>
			{lastPage > 1 && (
				<Pagination lastPage={lastPage} page={page} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 36px;
	}
`;
