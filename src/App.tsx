import React, { useEffect, useState } from 'react';

const NAVIGATION_EVENT = 'pushstate';

const navigate = (href: string) => {
	window.history.pushState({}, '', href); //cambia la url pero no refresca la pagina
	console.log('href', href);

	const navigationEvent = new Event(NAVIGATION_EVENT);
	window.dispatchEvent(navigationEvent);
};

const HomePage = () => {
	return (
		<div>
			<h3>Home</h3>
			<button onClick={() => navigate('/about')}>Here go to about</button>
		</div>
	);
};

const About = () => {
	return (
		<div>
			<h4>About</h4>
			<button onClick={() => navigate('/')}>Here go to HOME</button>
		</div>
	);
};

export const App = () => {
	const [currentpath, setCurrentpath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentpath(window.location.pathname);
		};

		window.addEventListener(NAVIGATION_EVENT, onLocationChange);
		window.addEventListener('popstate', onLocationChange);

		return () => {
			window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);

	return (
		<>
			{currentpath === '/' && <HomePage />}
			{currentpath === '/about' && <About />}
		</>
	);
};
