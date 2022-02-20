import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../components/modal/modal';

const mockFilm = {
	title: 'Another Film',
	sypnosis:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	trailer: '/assets/clips/trailer.mp4',
};

const mockFn = jest.fn();

describe('Modal', () => {
	it('should render modal', () => {
		const modal = render(<Modal film={mockFilm} closeModal={mockFn} />);
		expect(modal).toMatchSnapshot();
	});
});
