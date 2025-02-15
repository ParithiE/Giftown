import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OtpForm from '../../../components/account/OtpForm';

test('renders OtpForm and validates user input', () => {
  render(<OtpForm />);

  const input = screen.getByLabelText(/otp/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  fireEvent.change(input, { target: { value: '123456' } });
  expect(input.value).toBe('123456');

  fireEvent.click(submitButton);
  expect(screen.getByText(/otp submitted/i)).toBeInTheDocument();
});