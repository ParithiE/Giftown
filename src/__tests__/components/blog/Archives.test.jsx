import React from 'react';
import { render, screen } from '@testing-library/react';
import Archives from '../../../blog/Archives';

test('renders Archives component', () => {
  render(<Archives />);
  const linkElement = screen.getByText(/Archives/i);
  expect(linkElement).toBeInTheDocument();
});