import React from 'react';
import { render } from '@testing-library/react';
import Invoice from '../../cart/Invoice';

test('renders Invoice view', () => {
  const { getByText } = render(<Invoice />);
  const linkElement = getByText(/Invoice/i);
  expect(linkElement).toBeInTheDocument();
});