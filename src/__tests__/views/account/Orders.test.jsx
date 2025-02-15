import React from 'react';
import { render, screen } from '@testing-library/react';
import Orders from '../../../views/account/Orders';

test('hello world!', () => {
	render(<Orders />);
	const linkElement = screen.getByText(/Orders/i);
	expect(linkElement).toBeInTheDocument();
});