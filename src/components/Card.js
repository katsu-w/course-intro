import { createElement } from 'react';

function Card({ count, setCount }) {
	return createElement(
		'div',
		{ className: 'card' },
		createElement(
			'button',
			{ onClick: () => setCount((count) => count + 1) },
			'count is ',
			count,
		),
		createElement(
			'p',
			{},
			'Edited ',
			createElement('code', {}, 'src/App.jsx'),
			' and now it has less jsх',
		),
	);
}

export default Card;
