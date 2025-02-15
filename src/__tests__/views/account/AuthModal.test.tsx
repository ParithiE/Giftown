import React from 'react';
import { render } from '@testing-library/react';
import AuthModal from '../../../../../views/account/AuthModal';

test('renders AuthModal correctly', () => {
  const { getByText } = render(<AuthModal />);
  const linkElement = getByText(/auth modal/i);
  expect(linkElement).toBeInTheDocument();
});