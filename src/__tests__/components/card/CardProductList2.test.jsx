import React from 'react';
import { render, screen } from '@testing-library/react';
import CardProductList2 from '../../../card/CardProductList2';

test('renders CardProductList2 component', () => {
  render(<CardProductList2 />);
  const linkElement = screen.getByText(/your expected text/i);
  expect(linkElement).toBeInTheDocument();
});