import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../../../others/Details';

test('renders Details component with correct information', () => {
  render(<Details />);
  const element = screen.getByText(/expected text/i);
  expect(element).toBeInTheDocument();
});