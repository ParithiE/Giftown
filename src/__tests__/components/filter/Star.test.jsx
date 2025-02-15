import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Star from '../../../filter/Star';

test('renders Star filter component', () => {
    render(<Star />);
    const starElement = screen.getByText(/star/i);
    expect(starElement).toBeInTheDocument();
});

test('allows user to select a star rating', () => {
    render(<Star />);
    const starElement = screen.getByRole('button', { name: /1 star/i });
    fireEvent.click(starElement);
    expect(starElement).toHaveAttribute('aria-checked', 'true');
});