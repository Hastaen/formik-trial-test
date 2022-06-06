import React from 'react';
import { render, screen } from '@testing-library/react';
import Performance from './Performance';

test('renders learn react link', () => {
  render(<Performance />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
