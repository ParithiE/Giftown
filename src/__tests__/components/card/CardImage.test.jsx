import React from 'react';
import { render } from '@testing-library/react';
import CardImage from '../../../card/CardImage';

test('renders CardImage component', () => {
  const { getByAltText } = render(<CardImage alt="Card Image" src="image-url.jpg" />);
  const image = getByAltText(/Card Image/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'image-url.jpg');
});