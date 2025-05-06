import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './components/postCard/postCard';
import { Pagination } from './components/pagination/Pagination';
import { PAGINATION_LIMIT } from '../../constants/paginationlimit';
import { Search } from './components/search/search';
import { debounce } from './utils/debounce';
import { getLastFromLinks } from './utils/getLastFromLinks';

const MainContainer = ({ className }: { className?: string }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastFromLinks(links));
			},
		);
	}, [page, requestServer, shouldSearch]);

	const startDelayesSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayesSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="post-and-search">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />
				{posts.length ? (
					<div className="post-list">
						{posts.map(
							({ id, title, publishedAt, commentsCount, imageUrl }) => (
								<PostCard
									key={id}
									id={id}
									title={title}
									publishedAt={publishedAt}
									commentsCount={commentsCount}
									imageUrl={imageUrl}
								/>
							),
						)}
					</div>
				) : (
					<div className="no-found-posts">Статьи не найдены</div>
				)}
			</div>

			{lastPage > 1 && posts.length > 0 && (
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

	& .no-found-posts {
		text-align: center;
		font-size: 21px;
		margin: 40px;
	}

	& .post-and-search {
		min-height: 930px;
	}
`;
