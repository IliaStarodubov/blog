import { setPostData } from './setPostData';

export const savePostAsync = (requestServer, newPostData) => (dispatch) =>
	requestServer('savePost', newPostData).then((updatedPost) => {
		dispatch(setPostData(updatedPost.res));
		console.log(updatedPost);

		return updatedPost.res;
	});
