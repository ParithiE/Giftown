import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileForm from '../../../components/account/ProfileForm';

test('renders ProfileForm component', () => {
  render(<ProfileForm />);
  const headingElement = screen.getByText(/Profile Form/i);
  expect(headingElement).toBeInTheDocument();
});

test('handles form submission', () => {
  const handleSubmit = jest.fn();
  render(<ProfileForm onSubmit={handleSubmit} />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  submitButton.click();
  expect(handleSubmit).toHaveBeenCalled();
});