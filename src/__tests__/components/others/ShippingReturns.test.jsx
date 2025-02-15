import React from 'react';
import { render } from '@testing-library/react';
import ShippingReturns from '../../../components/others/ShippingReturns';

test('renders ShippingReturns component correctly', () => {
  const { getByText } = render(<ShippingReturns />);
  const linkElement = getByText(/Shipping and Returns/i);
  expect(linkElement).toBeInTheDocument();
});