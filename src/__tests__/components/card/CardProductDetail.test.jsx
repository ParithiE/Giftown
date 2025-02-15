import React from 'react';
import { render, screen } from '@testing-library/react';
import CardProductDetail from '../../../card/CardProductDetail';

test('renders CardProductDetail component', () => {
  render(<CardProductDetail />);
  const element = screen.getByText(/product detail/i);
  expect(element).toBeInTheDocument();
});