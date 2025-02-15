import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from '../../../blog/CardList';

test('renders the correct items in CardList', () => {
  const items = [
    { id: 1, title: 'First Item' },
    { id: 2, title: 'Second Item' },
  ];

  render(<CardList items={items} />);

  items.forEach(item => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });
});