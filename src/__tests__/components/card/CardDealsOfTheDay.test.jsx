import React from 'react';
import { render, screen } from '@testing-library/react';
import CardDealsOfTheDay from '../../../card/CardDealsOfTheDay';

test('displays the correct deals', () => {
    const deals = [
        { id: 1, title: 'Deal 1', price: '$10' },
        { id: 2, title: 'Deal 2', price: '$20' },
    ];
    
    render(<CardDealsOfTheDay deals={deals} />);
    
    deals.forEach(deal => {
        expect(screen.getByText(deal.title)).toBeInTheDocument();
        expect(screen.getByText(deal.price)).toBeInTheDocument();
    });
});