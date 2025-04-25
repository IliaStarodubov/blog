import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { server } from '../../bff/server';
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { Link, Navigate } from 'react-router-dom';
import { H2 } from '../../components/h2/h2';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants/role';
import { AuthFormError } from '../../components/authError/auth-form-error';
import { useResetForm } from '../../hooks';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символов')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # % ',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(25, 'Неверно заполнен пароль. Максимум 25 символов'),
});

const StyledLink = styled(Link)`
	text-align: center;
	margin: 30px 0;
	text-decoration: underline;
	font-size: 18px;
`;

const AuthorizationCotainer = ({ className }: { className?: string }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState<string | null>(null);
	const dispath = useDispatch();

	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ login, password }: { login: string; password: string }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispath(setUser(res));
			sessionStorage.setItem('userData', JSON.stringify(res));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMasage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" placeholder="Логин..." {...register('login')} />
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password')}
				/>
				<Button type="submit" disabled={!!formError}>
					Авторизоваться
				</Button>
				{errorMasage && <AuthFormError>{errorMasage}</AuthFormError>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationCotainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		margin-top: 50px;
		width: 250px;
		opacity: 1;
		visibility: visible;
		-webkit-transition: all 0.3s ease;
	}
`;
