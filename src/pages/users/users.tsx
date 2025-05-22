import { H2 } from '../../components/h2/h2';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PrivateContent } from '../../components/trivate-content/private-content';
import { ROLE } from '../../constants/role';
import { checkAccess } from '../../utils/checkAccess';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';

const UsersContainer = ({ className }: { className?: string }) => {
	const [users, setUsers] = useState<[]>([]);
	const [roles, setRoles] = useState<[]>([]);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList, userRole]);

	const onUserRemove = (userId: string) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registre-at-column">Дата регистрация</div>
						<div className="role-column">Роль</div>
					</TableRow>

					{users.map(({ id, login, registredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registredAt={registredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</div>
		</PrivateContent>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	font-size: 18px;
`;
