import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../../product/List';

test('renders Product List view', () => {
  render(<ProductList />);
  const headingElement = screen.getByText(/Product List/i);
  expect(headingElement).toBeInTheDocument();
});