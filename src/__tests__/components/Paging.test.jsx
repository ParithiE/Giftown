import React from 'react';
import { render, screen } from '@testing-library/react';
import Paging from '../../components/Paging';

test('renders Paging component', () => {
    render(<Paging />);
    const linkElement = screen.getByText(/Paging/i);
    expect(linkElement).toBeInTheDocument();
});