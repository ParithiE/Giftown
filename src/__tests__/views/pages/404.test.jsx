import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '../../../views/pages/404';

test('renders 404 page correctly', () => {
  const { getByText } = render(<NotFoundPage />);
  const linkElement = getByText(/404 Not Found/i);
  expect(linkElement).toBeInTheDocument();
});