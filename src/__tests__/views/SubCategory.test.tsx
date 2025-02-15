import React from 'react';
import { render } from '@testing-library/react';
import SubCategory from '../SubCategory';

test('renders SubCategory view', () => {
  const { getByText } = render(<SubCategory />);
  const linkElement = getByText(/SubCategory/i);
  expect(linkElement).toBeInTheDocument();
});