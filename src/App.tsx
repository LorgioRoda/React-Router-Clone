import React, { useEffect, useState } from 'react';
import { Link } from './components/Link/Link';

const NAVIGATION_EVENT = 'pushstate';

export const navigate = (href: string) => {
	window.history.pushState({}, '', href); //changes the url but does not refresh the page
	const navigationEvent = new Event(NAVIGATION_EVENT);
	window.dispatchEvent(navigationEvent);
};

const HomePage = () => {
	return (
		<div>
			<h3>Home</h3>
			<Link to='/about'>Here go to About</Link>
		</div>
	);
};

const About = () => {
	return (
		<div>
			<h4>About</h4>
			<Link to='/'>Here go to Home</Link>
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
