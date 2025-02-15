import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactUsForm from '../../components/ContactUsForm';

test('validates user input handling in ContactUsForm', () => {
	render(<ContactUsForm />);
	
	const nameInput = screen.getByLabelText(/name/i);
	const emailInput = screen.getByLabelText(/email/i);
	const messageInput = screen.getByLabelText(/message/i);
	const submitButton = screen.getByRole('button', { name: /submit/i });

	fireEvent.change(nameInput, { target: { value: 'John Doe' } });
	fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
	fireEvent.change(messageInput, { target: { value: 'Hello!' } });
	fireEvent.click(submitButton);

	expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
});