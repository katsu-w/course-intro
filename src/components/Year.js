import { createElement } from 'react';

function Year() {
	return createElement('h2', {}, new Date().getFullYear().toString());
}

export default Year;
