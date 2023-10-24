import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Character Count link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Character Count/i);
  expect(linkElement).toBeInTheDocument();
});
