import { ACTION_TYPE } from '../actions';

export interface PostState {
	id: string;
	title: string;
	imageUrl: string;
	publishedAt: string;
	content: string;
	comments: [];
}

const initialState: PostState = {
	id: '',
	title: '',
	imageUrl: '',
	publishedAt: '',
	content: '',
	comments: [],
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POST_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
