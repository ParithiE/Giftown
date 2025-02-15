import React from 'react';
import { render, screen } from '@testing-library/react';
import Documentation from '../Documentation';

test('renders Documentation view correctly', () => {
  render(<Documentation />);
  const headingElement = screen.getByText(/Documentation/i);
  expect(headingElement).toBeInTheDocument();
});