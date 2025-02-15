import React from 'react';
import { render, screen } from '@testing-library/react';
import CardFeaturedProduct from '../../../card/CardFeaturedProduct';

test('renders CardFeaturedProduct component', () => {
  render(<CardFeaturedProduct />);
  const linkElement = screen.getByText(/featured product/i);
  expect(linkElement).toBeInTheDocument();
});