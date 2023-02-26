import React, { useEffect, useState } from 'react';

export const NAVIGATION_EVENT = 'pushstate';

export const Router = ({ routes = [], DefaultComponent = null }: any) => {
	const [currentPath, setCurrentpath] = useState(window.location.pathname);

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

	console.log(routes);

	const RenderPage = routes.find(
		({ path }: any) => path === currentPath,
	)?.Component;

	console.log(RenderPage);

	return RenderPage ? <RenderPage /> : null;
};
