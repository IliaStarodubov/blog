import { UserState } from '../types/store';

export const selectUserRole = ({ user }: { user: UserState }) => user.roleId;
