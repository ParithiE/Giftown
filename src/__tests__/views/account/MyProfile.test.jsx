import React from 'react';
import { render, screen } from '@testing-library/react';
import MyProfile from '../../views/account/MyProfile';

test('displays the correct information in MyProfile view', () => {
    render(<MyProfile />);
    expect(screen.getByText(/Profile Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Username:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
});