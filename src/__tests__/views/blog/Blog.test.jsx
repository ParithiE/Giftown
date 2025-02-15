import React from 'react';
import { render } from '@testing-library/react';
import Blog from '../../views/blog/Blog';

test('renders Blog view', () => {
  const { getByText } = render(<Blog />);
  const linkElement = getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});