import React from 'react';
import { render, screen } from '@testing-library/react';
import TopMenu from '../../components/TopMenu';

test('renders TopMenu component', () => {
  render(<TopMenu />);
  const linkElement = screen.getByText(/Menu/i);
  expect(linkElement).toBeInTheDocument();
});