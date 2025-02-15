import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Category from '../../../filter/Category';

test('filters items correctly based on selected category', () => {
  const items = [
    { id: 1, category: 'Fruits', name: 'Apple' },
    { id: 2, category: 'Fruits', name: 'Banana' },
    { id: 3, category: 'Vegetables', name: 'Carrot' },
  ];

  render(<Category items={items} />);

  fireEvent.change(screen.getByLabelText(/select category/i), {
    target: { value: 'Fruits' },
  });

  const filteredItems = screen.getAllByRole('listitem');
  expect(filteredItems).toHaveLength(2);
  expect(filteredItems[0]).toHaveTextContent('Apple');
  expect(filteredItems[1]).toHaveTextContent('Banana');
});