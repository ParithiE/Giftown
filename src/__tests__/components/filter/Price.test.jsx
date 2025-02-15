import React from 'react';
import { render, screen } from '@testing-library/react';
import Price from '../../../filter/Price';

test('renders Price filter component', () => {
    render(<Price />);
    const priceLabel = screen.getByText(/price/i);
    expect(priceLabel).toBeInTheDocument();
});