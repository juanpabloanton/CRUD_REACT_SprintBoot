import { render, screen } from '@testing-library/react';
import Persona from './Persona';

test('renders learn react link', () => {
  render(<Persona />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
