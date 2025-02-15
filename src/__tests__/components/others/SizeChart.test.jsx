import React from 'react';
import { render, screen } from '@testing-library/react';
import SizeChart from '../../../components/others/SizeChart';

test('renders SizeChart component', () => {
    render(<SizeChart />);
    const linkElement = screen.getByText(/Size Chart/i);
    expect(linkElement).toBeInTheDocument();
});