import React from 'react';
import { navigate } from '../../App';

interface LinkProps extends React.HTMLAttributes<any> {
	target?: string;
	to: string;
	props?: any;
}

export const Link = ({ target, to, ...props }: LinkProps) => {
	const handleClick = (event: any) => {
		event?.preventDefault();

		const isMainEvent = event.button === 0; //primary click
		const isModifiedEvent =
			event.metaKey || event.altKey || event.ctrlKey || event.shiftkey; //cmd + click
		const isManagedEvent = target === undefined || target === '_self';

		if (isMainEvent && isManagedEvent && !isModifiedEvent) navigate(to); // SPA navigation
	};

	return <a onClick={handleClick} href={to} target={target} {...props}></a>;
};
