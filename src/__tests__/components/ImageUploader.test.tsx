import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageUploader from '../../components/ImageUploader';

test('renders ImageUploader component', () => {
  render(<ImageUploader />);
  const linkElement = screen.getByText(/upload/i);
  expect(linkElement).toBeInTheDocument();
});