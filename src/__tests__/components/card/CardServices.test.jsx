import React from 'react';
import { render, screen } from '@testing-library/react';
import CardServices from '../../../components/card/CardServices';

test('renders CardServices component', () => {
    render(<CardServices />);
    const linkElement = screen.getByText(/Card Services/i);
    expect(linkElement).toBeInTheDocument();
});