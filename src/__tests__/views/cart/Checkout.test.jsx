import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout from '../../../views/cart/Checkout';

test('renders Checkout component', () => {
  render(<Checkout />);
  const headingElement = screen.getByText(/Checkout/i);
  expect(headingElement).toBeInTheDocument();
});