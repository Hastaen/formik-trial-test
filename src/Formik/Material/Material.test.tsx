import React from 'react';
import { render, screen } from '@testing-library/react';
import Material from './Material';

test('renders learn react link', () => {
  render(<Material />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
