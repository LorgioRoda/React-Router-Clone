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

		const isMainEvent = event.button === 0;
		const isModifiedEvent =
			event.metaKey || event.altKey || event.ctrlKey || event.shiftkey;

		navigate(to);
	};

	return <a onClick={handleClick} href={to} target={target} {...props}></a>;
};
