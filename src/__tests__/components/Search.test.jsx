import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../../components/Search';

test('renders Search component', () => {
  render(<Search />);
  const searchInput = screen.getByPlaceholderText(/search/i);
  expect(searchInput).toBeInTheDocument();
});