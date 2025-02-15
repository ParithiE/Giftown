import React from 'react';
import { render } from '@testing-library/react';
import OtpAuthView from '../../../views/account/OtpAuthView';

test('renders OtpAuthView', () => {
  const { getByText } = render(<OtpAuthView />);
  const linkElement = getByText(/Otp Authentication/i);
  expect(linkElement).toBeInTheDocument();
});