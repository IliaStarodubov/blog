import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ContainerFooter = ({ className }: { className?: string }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=ekaterinburg&units=metric&lang=ru&appid=ed222269784d1af0f23357b1477cb73d',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(`${Math.round(main.temp)}`);
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(ContainerFooter)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px -26px 32px -8px rgba(34, 60, 80, 0.2);
	width: 1200px;
	background-color: white;
	font-weight: bold;
`;
