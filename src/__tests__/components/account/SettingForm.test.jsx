import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingForm from '../../../components/account/SettingForm';

test('renders SettingForm component', () => {
  render(<SettingForm />);
  const headingElement = screen.getByText(/Setting Form/i);
  expect(headingElement).toBeInTheDocument();
});

test('submits the form', () => {
  const handleSubmit = jest.fn();
  render(<SettingForm onSubmit={handleSubmit} />);
  
  const submitButton = screen.getByRole('button', { name: /submit/i });
  submitButton.click();
  
  expect(handleSubmit).toHaveBeenCalled();
});