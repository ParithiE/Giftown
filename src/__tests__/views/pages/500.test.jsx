import React from 'react';
import { render } from '@testing-library/react';
import Page500 from '../../../views/pages/500';

test('renders 500 page', () => {
  const { getByText } = render(<Page500 />);
  const linkElement = getByText(/500 - Internal Server Error/i);
  expect(linkElement).toBeInTheDocument();
});