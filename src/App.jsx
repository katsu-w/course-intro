import './App.css';
import { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [isError, setIsError] = useState(false);

	function onInputButtonClick() {
		const promptValue = prompt('Введите значение', '');

		if (promptValue.length < 3) {
			setIsError(true);
			setValue('');
		} else {
			setIsError(false);
			setValue(promptValue);
		}
	}

	function onAddValueButtonClick() {
		if (value) {
			setList([...list, value]);
			setValue('');
		}
	}

	return (
		<>
			<h1 className="page-heading">Ввод значения</h1>
			<p className="no-margin-text">
				Текущее значение <code>value</code>: "
				<output className="current-value">{value}</output>"
			</p>
			{isError && (
				<div className="error">Введенное значение должно содержать минимум 3 символа</div>
			)}
			<div className="buttons-container">
				<button className="button" onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className="button"
					onClick={onAddValueButtonClick}
					disabled={isError || value.length === 0}
				>
					Добавить в список
				</button>
			</div>
			<div className="list-container">
				<h2 className="list-heading">Список:</h2>
				{list.length > 0 ? (
					<ul className="list">
						{list.map((item) => (
							<li key={item} className="list-item">
								{item}
							</li>
						))}
					</ul>
				) : (
					<p className="no-margin-text">Нет добавленных элементов</p>
				)}
			</div>
		</>
	);
}

export default App;
