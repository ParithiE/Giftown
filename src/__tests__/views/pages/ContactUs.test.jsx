import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from '../../views/pages/ContactUs';

test('renders Contact Us page', () => {
  render(<ContactUs />);
  const heading = screen.getByText(/Contact Us/i);
  expect(heading).toBeInTheDocument();
});