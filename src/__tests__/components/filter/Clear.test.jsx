import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Clear from '../../../filter/Clear';

test('Clear filter component functionality', () => {
  const { getByText } = render(<Clear />);
  const clearButton = getByText('Clear');

  fireEvent.click(clearButton);
  
  expect(clearButton).toBeInTheDocument();
});