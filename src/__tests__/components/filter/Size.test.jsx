import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Size from '../../../filter/Size';

test('filters items correctly based on size', () => {
  const items = [
    { id: 1, size: 'S' },
    { id: 2, size: 'M' },
    { id: 3, size: 'L' },
  ];
  
  render(<Size items={items} />);
  
  fireEvent.click(screen.getByText('S'));
  expect(screen.getByText('Item 1')).toBeInTheDocument();
  expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
  expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
  
  fireEvent.click(screen.getByText('M'));
  expect(screen.getByText('Item 2')).toBeInTheDocument();
  expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
  
  fireEvent.click(screen.getByText('L'));
  expect(screen.getByText('Item 3')).toBeInTheDocument();
  expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
});