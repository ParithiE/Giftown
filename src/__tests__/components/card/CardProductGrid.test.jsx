import React from 'react';
import { render, screen } from '@testing-library/react';
import CardProductGrid from '../../../card/CardProductGrid';

test('displays products correctly', () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
  ];

  render(<CardProductGrid products={products} />);

  products.forEach(product => {
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.price)).toBeInTheDocument();
  });
});