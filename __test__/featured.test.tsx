import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Featured from '../components/featured/featured';

const mockFilms = [
	{
		title: 'Film Title Here',
		featuredImg: '/assets/images/featured1.png',
		posterImg: '/assets/images/poster1.png',
		trailer:
			'blob:https://www.youtube.com/a5512c08-80c0-4c67-bafd-b865ac6e0f50',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		title: 'Another Film',
		featuredImg: '/assets/images/featured2.png',
		posterImg: '/assets/images/poster2.png',
		trailer:
			'blob:https://www.youtube.com/02c39461-4044-4c77-8f21-181bb4bec043',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
];

describe('featured component', () => {
	it('renders component', () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		const featuredSection = screen.getByTestId('featured-section');
		expect(featuredSection).toBeInTheDocument();
		expect(featured).toMatchSnapshot();
	});
	it('has multiple images', () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		const img1 = screen.getByTestId('img-container0');
		const img2 = screen.getByTestId('img-container1');
		expect(img1).toBeInTheDocument();
		expect(img2).toBeInTheDocument();
	});
	it('changes image in slideshow', () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		const index = screen.getByTestId('slider-status-1');
		fireEvent.click(index);
		const featuredImage = screen.getByTestId('feature-img-1');
		expect(featuredImage.outerHTML).toContain(
			`translate3d(${-1 * 100}%, 0, 0)`
		);
	});
	it('changes image in slideshow', () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		const cursorRight = screen.getByTestId('cursor-right');
		fireEvent.click(cursorRight);
		const featuredImage = screen.getByTestId('feature-img-1');
		expect(featuredImage.outerHTML).toContain(
			`translate3d(${-1 * 100}%, 0, 0)`
		);
	});
	it('changes image in slideshow at end it goes back to 0', async () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		const cursorRight = screen.getByTestId('cursor-right');
		await act(async () => {
			await fireEvent.click(cursorRight);
			await fireEvent.click(cursorRight);
		});
		fireEvent.click(cursorRight);
		fireEvent.click(cursorRight);
		const featuredImage = screen.getByTestId('feature-img-0');
		expect(featuredImage.outerHTML).toContain(
			`translate3d(${-0 * 100}%, 0, 0)`
		);
	});

	it('previous button works', () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		const cursorRight = screen.getByTestId('cursor-right');
		const cursorLeft = screen.getByTestId('cursor-left');
		fireEvent.click(cursorRight);
		fireEvent.click(cursorLeft);
		const featuredImage = screen.getByTestId('feature-img-0');
		expect(featuredImage.outerHTML).toContain(
			`translate3d(${-0 * 100}%, 0, 0)`
		);
	});
	it('previous button works', () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		const cursorRight = screen.getByTestId('cursor-right');
		const cursorLeft = screen.getByTestId('cursor-left');

		fireEvent.click(cursorLeft);
		const featuredImage = screen.getByTestId('feature-img-1');
		expect(featuredImage.outerHTML).toContain(
			`translate3d(${-1 * 100}%, 0, 0)`
		);
	});
	it('changes after timer', async () => {
		jest.useFakeTimers();
		jest.spyOn(global, 'setTimeout');
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 8000);

		await act(async () => {
			await jest.advanceTimersByTime(9000);
		});
		const featuredImage = screen.getByTestId('feature-img-1');
		expect(featuredImage.outerHTML).toContain(
			`translate3d(${-1 * 100}%, 0, 0)`
		);
	});
	it('changes after timer', async () => {
		jest.useFakeTimers();
		jest.spyOn(global, 'setTimeout');
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 8000);

		await act(async () => {
			await jest.advanceTimersByTime(9000);
		});
		await act(async () => {
			await jest.advanceTimersByTime(9000);
		});
		const featuredImage = screen.getByTestId('feature-img-0');
		expect(featuredImage.outerHTML).toContain(
			`translate3d(${-0 * 100}%, 0, 0)`
		);
	});
	it('test the height', async () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 150,
		});

		await act(async () => {
			await window.dispatchEvent(new Event('resize'));
		});

		expect(window.innerWidth).toBe(150);
	});
	it('test the height', async () => {
		const openModal = jest.fn();
		const featured = render(
			<Featured featuredFilms={mockFilms} openModal={openModal} />
		);
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1500,
		});

		await act(async () => {
			await window.dispatchEvent(new Event('resize'));
		});

		expect(window.innerWidth).toBe(1500);
	});
});
