import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
	it('renders nav element', () => {
		const home = render(<Home />);

		const logo = screen.getByTestId('logo');
		const aboutNav =screen.getByTestId('/about')
		const connectNav = screen.getByTestId('/connect')

		expect(logo).toBeInTheDocument();
		expect(aboutNav).toBeInTheDocument();
		expect(connectNav).toBeInTheDocument();
	});
});
