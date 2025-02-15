import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CouponApplyForm from '../../../../../components/others/CouponApplyForm';

test('renders CouponApplyForm and handles user input', () => {
    render(<CouponApplyForm />);
    
    const input = screen.getByPlaceholderText(/enter coupon code/i);
    const button = screen.getByRole('button', { name: /apply/i });

    fireEvent.change(input, { target: { value: 'TESTCODE' } });
    expect(input.value).toBe('TESTCODE');

    fireEvent.click(button);
    // Add assertions to check the expected behavior after applying the coupon
});