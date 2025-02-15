import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

test('renders Header component', () => {
  render(<Header />);
  const headerElement = screen.getByText(/header text/i); // Replace with actual text
  expect(headerElement).toBeInTheDocument();
});