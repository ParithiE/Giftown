import React from 'react';
import { render, screen } from '@testing-library/react';
import StarZone from '../../../views/product/StarZone';

test('renders StarZone component', () => {
  render(<StarZone />);
  const linkElement = screen.getByText(/StarZone/i);
  expect(linkElement).toBeInTheDocument();
});