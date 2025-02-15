import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSupport from '../../../card/CardSupport';

test('renders CardSupport component with correct information', () => {
  render(<CardSupport />);
  const element = screen.getByText(/expected text/i);
  expect(element).toBeInTheDocument();
});