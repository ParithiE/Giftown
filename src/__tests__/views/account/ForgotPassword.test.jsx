import React from 'react';
import { render, screen } from '@testing-library/react';
import ForgotPassword from '../../../views/account/ForgotPassword';

test('renders ForgotPassword component', () => {
  render(<ForgotPassword />);
  const linkElement = screen.getByText(/forgot password/i);
  expect(linkElement).toBeInTheDocument();
});