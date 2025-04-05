import { UserState } from '../reducers';

export const selectUserSession = ({ user }: { user: UserState }) => user.session;
