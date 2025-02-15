import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from '../../../views/blog/Detail';

test('renders Detail view with correct information', () => {
  render(<Detail />);
  const heading = screen.getByRole('heading', { name: /detail/i });
  expect(heading).toBeInTheDocument();
  const content = screen.getByText(/some expected content/i);
  expect(content).toBeInTheDocument();
});