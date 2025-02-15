import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from '../../../filter/Tag';

test('renders Tag component', () => {
  render(<Tag label="Sample Tag" />);
  const tagElement = screen.getByText(/Sample Tag/i);
  expect(tagElement).toBeInTheDocument();
});