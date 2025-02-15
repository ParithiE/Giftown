import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from '../../../components/account/SignUpForm';

test('renders SignUpForm and handles user registration', () => {
	render(<SignUpForm />);
	
	const usernameInput = screen.getByPlaceholderText(/username/i);
	const passwordInput = screen.getByPlaceholderText(/password/i);
	const submitButton = screen.getByRole('button', { name: /sign up/i });

	fireEvent.change(usernameInput, { target: { value: 'testuser' } });
	fireEvent.change(passwordInput, { target: { value: 'password123' } });
	fireEvent.click(submitButton);

	expect(screen.getByText(/registration successful/i)).toBeInTheDocument();
});