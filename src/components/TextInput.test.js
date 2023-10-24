import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';
import App from '../App';

test('renders Echo: link', () => {
  render(<TextInput />, {wrapper: App});
  const linkElement = screen.getByText(/Echo:/i);
  expect(linkElement).toBeInTheDocument();
});
