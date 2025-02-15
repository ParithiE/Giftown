import React from 'react';
import { render, screen } from '@testing-library/react';
import ProtectedRoute from '../../components/ProtectedRoute';

test('renders ProtectedRoute component', () => {
  render(<ProtectedRoute />);
  const linkElement = screen.getByText(/Protected Route/i);
  expect(linkElement).toBeInTheDocument();
});