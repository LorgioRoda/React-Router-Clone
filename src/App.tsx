import { HomePage } from './Pages/HomePage';
import { About } from './Pages/About';
import { NAVIGATION_EVENT, Router } from './components/Router/Router';

export const navigate = (href: string) => {
	window.history.pushState({}, '', href); //changes the url but does not refresh the page
	const navigationEvent = new Event(NAVIGATION_EVENT);
	window.dispatchEvent(navigationEvent);
};

const routerPage = [
	{ path: '/', Component: <HomePage /> },
	{ path: '/about', Component: <About /> },
];

export const App = () => {
	return (
		<>
			<Router routes={routerPage} />
		</>
	);
};
