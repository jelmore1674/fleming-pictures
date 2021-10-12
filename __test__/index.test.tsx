import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
	it('renders nav element', () => {
		const home = render(<Home />);

		const logo = screen.getByTestId('logo');
		expect(logo).toBeInTheDocument();
	});
});
