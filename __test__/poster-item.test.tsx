import React from 'react';
import { render, screen } from '@testing-library/react';
import PosterItem from '../components/poster-items/poster-items';

const mockItem = {
	title: 'teset',
	poster: '/assets/images/poster1.png',
};

describe('<PosterItem />', () => {
	it('should match snapshot', () => {
		const posterItem = render(<PosterItem {...mockItem} />);
		expect(posterItem).toMatchSnapshot();
	});
});
