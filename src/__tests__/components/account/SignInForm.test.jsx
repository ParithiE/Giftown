import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignInForm from '../../../components/account/SignInForm';

test('renders SignInForm and handles login', () => {
    render(<SignInForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/login successful/i)).toBeInTheDocument();
});