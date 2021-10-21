import React from 'react';

const Footer: React.FC = () => {
	const date: Date = new Date();
	const year: number = date.getFullYear();
	return (
		<footer className='footer'>
			<div data-testid='copyright'>{`Copyright ${year}`}</div>
		</footer>
	);
};

export default Footer;
