import React from 'react';
import { render, screen } from '@testing-library/react';
import Color from '../../../filter/Color';

test('renders Color filter component', () => {
  render(<Color />);
  const colorFilterElement = screen.getByText(/color/i);
  expect(colorFilterElement).toBeInTheDocument();
});