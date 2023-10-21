import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Optional } from '@poolofdeath20/util';

const root = Optional.from(document.getElementById('root')).unwrapOrThrow(
	new Error('There should be an element with id of "root" in index.html')
);

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
