import React from 'react';
import { render, screen, act } from '@testing-library/react';
import API from '../pages/test-api';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('api call', () => {
	it('renders the component', async () => {
		fetch.mockResponseOnce(JSON.stringify({ CAD: 'CAD' }));

		const api = render(<API />);
		const element = await screen.findByText('{"CAD":"CAD"}');
		expect(element).toBeInTheDocument();
	});
	it('handle error', async () => {
		fetch.mockReject(new Error('fake error message'));

		const api = render(<API />);
		const element = await screen.findByText('fake error message');
		expect(element).toBeInTheDocument();
	});
});
