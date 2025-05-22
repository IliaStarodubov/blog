import { setPostData } from './setPostData';

export const removeCommentAsync =
	(requestServer, postId: string, id: string) => (dispatch) => {
		requestServer('removePostComment', postId, id).then((postData) => {
			dispatch(setPostData(postData.res));
		});
	};
