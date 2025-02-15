import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../../Breadcrumb';

test('renders Breadcrumb component', () => {
  render(<Breadcrumb />);
  const breadcrumbElement = screen.getByText(/home/i);
  expect(breadcrumbElement).toBeInTheDocument();
});

test('navigates to correct page on click', () => {
  render(<Breadcrumb />);
  const linkElement = screen.getByText(/about/i);
  linkElement.click();
  expect(window.location.pathname).toBe('/about');
});