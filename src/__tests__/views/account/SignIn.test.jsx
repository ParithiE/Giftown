import React from 'react';
import { render, screen } from '@testing-library/react';
import SignIn from '../../../views/account/SignIn';

test('renders SignIn component', () => {
  render(<SignIn />);
  const linkElement = screen.getByText(/sign in/i);
  expect(linkElement).toBeInTheDocument();
});