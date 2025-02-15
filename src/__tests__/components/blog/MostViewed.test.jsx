import React from 'react';
import { render, screen } from '@testing-library/react';
import MostViewed from '../../../blog/MostViewed';

test('displays the correct data in MostViewed component', () => {
    const mockData = [
        { id: 1, title: 'Post 1', views: 100 },
        { id: 2, title: 'Post 2', views: 200 },
    ];

    render(<MostViewed data={mockData} />);

    mockData.forEach(post => {
        expect(screen.getByText(post.title)).toBeInTheDocument();
        expect(screen.getByText(`${post.views} views`)).toBeInTheDocument();
    });
});