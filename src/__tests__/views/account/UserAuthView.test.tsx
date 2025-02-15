import React from 'react';
import { render, screen } from '@testing-library/react';
import UserAuthView from '../../../views/account/UserAuthView';

test('renders UserAuthView component', () => {
  render(<UserAuthView />);
  const linkElement = screen.getByText(/User Authentication/i);
  expect(linkElement).toBeInTheDocument();
});