import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../components/nav/nav';

describe('Nav Component', () => {
	it('should match snapshot', () => {
		const nav = render(<Nav />);
		expect(nav).toMatchSnapshot();
	});
	it('should render logo', () => {
		const nav = render(<Nav />);
		const logo = screen.getByTestId('logo');
		expect(logo).toBeInTheDocument();
	});
	it('should render nav links', () => {
		const nav = render(<Nav />);
		const about = screen.getByTestId('/about');
		const connect = screen.getByTestId('/connect');
		expect(about).toBeInTheDocument();
		expect(connect).toBeInTheDocument();
	});
});
