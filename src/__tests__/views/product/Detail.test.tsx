import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from '../../../views/product/Detail';

test('renders product detail with correct information', () => {
  const product = {
    title: 'Sample Product',
    description: 'This is a sample product description.',
    price: '$100',
  };

  render(<Detail product={product} />);

  expect(screen.getByText(/Sample Product/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a sample product description./i)).toBeInTheDocument();
  expect(screen.getByText(/\$100/i)).toBeInTheDocument();
});