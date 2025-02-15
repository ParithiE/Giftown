import React from 'react';
import { render } from '@testing-library/react';
import Support from '../../views/pages/Support';

test('renders Support component', () => {
  const { getByText } = render(<Support />);
  const linkElement = getByText(/support/i);
  expect(linkElement).toBeInTheDocument();
});