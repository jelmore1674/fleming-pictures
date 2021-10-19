import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';
import modal from '../components/modal/modal';

describe('Home', () => {
	beforeEach(() => {
		// This part of the DOM would be rendered in the search results from the server side.
		// See search.html.erb.
		// It is where the portal will render.
		document.body.innerHTML = '<div id="myportal"></div>';
	});
	it('renders the home page', () => {
		const home = render(<Home />);
		expect(home).toMatchSnapshot();
	});
	it('renders featured element', () => {
		const home = render(<Home />);
		const featured = screen.getByTestId('featured-section');
		expect(featured).toBeInTheDocument();
	});
	it('renders has more info button', () => {
		const home = render(<Home />);
		const button = screen.getByTestId('btn-0');
		expect(button).toBeInTheDocument();
	});
	it('opens modal', () => {
		const home = render(<Home />);
		const button = screen.getByTestId('btn-0');
		fireEvent.click(button);
		const modal = screen.getByTestId('modal');
		expect(modal).toBeInTheDocument();
	});
	it('closes Modal', () => {
		const { getByTestId } = render(<Home />);
		const button = getByTestId('btn-0');
		fireEvent.click(button);
		const modal = getByTestId('modal');
		const close = getByTestId('close-modal');
		fireEvent.click(close);
		expect(modal).not.toBeInTheDocument();
	});
});
