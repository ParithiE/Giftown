import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from '../../../components/carousel/Carousel';

test('renders Carousel component', () => {
  render(<Carousel />);
  const carouselElement = screen.getByTestId('carousel');
  expect(carouselElement).toBeInTheDocument();
});