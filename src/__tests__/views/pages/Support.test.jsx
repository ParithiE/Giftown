import React from 'react';
import { render, screen } from '@testing-library/react';
import Support from '../../../views/pages/Support';

test('renders Support page', () => {
  render(<Support />);
  const heading = screen.getByText(/Support/i);
  expect(heading).toBeInTheDocument();
});