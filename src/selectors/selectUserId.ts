import { UserState } from '../types/store';

export const selectUserId = ({ user }: { user: UserState }) => user.id;
