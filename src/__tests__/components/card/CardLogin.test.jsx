import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardLogin from '../../../components/card/CardLogin';

test('renders CardLogin component and handles user login', () => {
	render(<CardLogin />);
	const usernameInput = screen.getByPlaceholderText(/username/i);
	const passwordInput = screen.getByPlaceholderText(/password/i);
	const loginButton = screen.getByRole('button', { name: /login/i });

	fireEvent.change(usernameInput, { target: { value: 'testuser' } });
	fireEvent.change(passwordInput, { target: { value: 'password123' } });
	fireEvent.click(loginButton);

	expect(screen.getByText(/login successful/i)).toBeInTheDocument();
});