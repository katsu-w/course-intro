// Императивный (доставь мне это отсюда)
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Year from './components/Year.js';
import Card from './components/Card.js';

// Декларативный (объявление функции)
function App() {
	// Декларативный (берём готовое состояние и функцию его изменения из реакта)
	const [count, setCount] = useState(0);

	// Императивный (функция - верни вот это)
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<Card count={count} setCount={setCount} />
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<Year />
		</>
	);
}

// Декларативный (экспортируй по умолчанию приложение)
export default App;
