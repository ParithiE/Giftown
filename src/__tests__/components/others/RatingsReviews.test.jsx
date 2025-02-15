import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingsReviews from '../../../../../components/others/RatingsReviews';

test('renders RatingsReviews component', () => {
  render(<RatingsReviews />);
  const linkElement = screen.getByText(/Ratings and Reviews/i);
  expect(linkElement).toBeInTheDocument();
});