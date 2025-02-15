import React from 'react';
import { render, screen } from '@testing-library/react';
import Wishlist from '../../../views/account/Wishlist';

test('renders Wishlist view correctly', () => {
    render(<Wishlist />);
    const heading = screen.getByText(/your wishlist/i);
    expect(heading).toBeInTheDocument();
});