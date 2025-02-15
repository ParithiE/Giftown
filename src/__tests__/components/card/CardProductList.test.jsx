import React from 'react';
import { render } from '@testing-library/react';
import CardProductList from '../../../card/CardProductList';

test('renders CardProductList component', () => {
  const { getByText } = render(<CardProductList />);
  const linkElement = getByText(/your expected text/i);
  expect(linkElement).toBeInTheDocument();
});