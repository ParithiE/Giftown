import React from 'react';
import { render } from '@testing-library/react';
import Tags from '../../../components/blog/Tags';

test('renders Tags component', () => {
  const { getByText } = render(<Tags />);
  const linkElement = getByText(/tags/i);
  expect(linkElement).toBeInTheDocument();
});