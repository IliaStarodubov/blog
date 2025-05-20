// src/types/store.ts

import { User } from './models'; // Импортируем модели
import { Post, Comment } from './models';

// Состояние пользователя
export interface UserState {
	id: string | null;
	login: string | null;
	roleId: number;
	session: Session | null;
}

// Состояние постов
export interface PostState {
	posts: Post[];
	currentPost: Post | null;
}

// Состояние комментариев
export interface CommentState {
	comments: Comment[];
}

// Тип состояния для всего Redux Store
export interface RootState {
	user: UserState;
	posts: PostState;
	comments: CommentState;
}
