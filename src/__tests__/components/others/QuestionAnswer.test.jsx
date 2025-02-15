import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionAnswer from '../../../components/others/QuestionAnswer';

test('renders QuestionAnswer component', () => {
  render(<QuestionAnswer />);
  const linkElement = screen.getByText(/Question Answer/i);
  expect(linkElement).toBeInTheDocument();
});