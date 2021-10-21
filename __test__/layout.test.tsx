import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Layout from '../layout/layout';
import Home from '../pages/index';

describe('<Layout />', () => {
	it('should match snapshot', () => {
		const layout = render(
			<Layout>
				<Home />
			</Layout>
		);
		expect(layout).toMatchSnapshot();
	});
});
