import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../../views/cart/Cart';

test('renders Cart component', () => {
    render(<Cart />);
    const linkElement = screen.getByText(/your cart is empty/i);
    expect(linkElement).toBeInTheDocument();
});