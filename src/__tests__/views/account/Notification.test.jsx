import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from '../../../views/account/Notification';

test('renders Notification view', () => {
  render(<Notification />);
  const linkElement = screen.getByText(/notification/i);
  expect(linkElement).toBeInTheDocument();
});