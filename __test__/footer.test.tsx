import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/footer';

describe('<Footer />', () => {
	it('matches snapshot', () => {
		const footer = render(<Footer />);
		expect(footer).toMatchSnapshot();
	});
});
