import { UserState } from '../types/store';

export const selectUserLogin = ({ user }: { user: UserState }) => user.login;
