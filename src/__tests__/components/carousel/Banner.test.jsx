import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../../../carousel/Banner';

test('renders Banner component', () => {
  const { getByText } = render(<Banner />);
  const linkElement = getByText(/banner content/i);
  expect(linkElement).toBeInTheDocument();
});