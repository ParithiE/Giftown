import React from 'react';
import { render } from '@testing-library/react';
import CardIcon from '../../../card/CardIcon';

test('renders CardIcon correctly', () => {
  const { getByTestId } = render(<CardIcon />);
  const cardIconElement = getByTestId('card-icon');
  expect(cardIconElement).toBeInTheDocument();
});