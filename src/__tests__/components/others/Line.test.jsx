import React from 'react';
import { render } from '@testing-library/react';
import Line from '../../../components/others/Line';

test('renders Line component', () => {
  const { getByText } = render(<Line />);
  const linkElement = getByText(/line/i);
  expect(linkElement).toBeInTheDocument();
});