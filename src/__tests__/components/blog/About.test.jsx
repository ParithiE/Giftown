import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../../blog/About';

test('renders About component with correct information', () => {
  render(<About />);
  const heading = screen.getByText(/About Us/i);
  const description = screen.getByText(/This is the about section/i);
  expect(heading).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});