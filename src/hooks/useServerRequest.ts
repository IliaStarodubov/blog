import { useSelector } from 'react-redux';
import { selectUserSession } from '../selectors';
import { server } from '../bff/server';
import { useCallback } from 'react';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return useCallback(
		(operation: string, ...params: any) => {
			const request = ['register', 'authorize', 'fetchPost', 'fetchPosts'].includes(
				operation,
			)
				? params
				: [session, ...params];

			return server[operation](...request);
		},
		[session],
	);
};
