import React from 'react';
import { render, screen } from '@testing-library/react';
import Follow from '../../../blog/Follow';

test('renders Follow component', () => {
    render(<Follow />);
    const linkElement = screen.getByText(/follow/i);
    expect(linkElement).toBeInTheDocument();
});