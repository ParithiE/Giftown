import React from 'react';
import { render, screen } from '@testing-library/react';
import Widgets from '../../../components/blog/Widgets';

test('hello world!', () => {
	render(<Widgets />);
	const linkElement = screen.getByText(/hello world/i);
	expect(linkElement).toBeInTheDocument();
});