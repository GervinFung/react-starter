import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { guardAsDefined } from '@poolofdeath20/util';

const root = guardAsDefined({
	value: document.getElementById('root'),
	error: new Error(
		'There should be an element with id of "root" in index.html'
	),
});
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
