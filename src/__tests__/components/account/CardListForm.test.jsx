import React from 'react';
import { render, screen } from '@testing-library/react';
import CardListForm from '../../../components/account/CardListForm';

test('renders CardListForm component', () => {
    render(<CardListForm />);
    const linkElement = screen.getByText(/Card List Form/i);
    expect(linkElement).toBeInTheDocument();
});

test('checks functionality of CardListForm', () => {
    render(<CardListForm />);
    // Add more tests to check the functionality of the component
});