import React from 'react';
import { render, screen } from '@testing-library/react';
import Schema from './Schema';

test('renders learn react link', () => {
  render(<Schema />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
