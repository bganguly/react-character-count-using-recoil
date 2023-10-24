import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Echo: link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Echo:/i);
  expect(linkElement).toBeInTheDocument();
});
