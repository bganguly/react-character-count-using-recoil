import { render, screen } from '@testing-library/react';
import App from '../App';
import CharacterCount from './CharacterCount';

test('renders Character Count link', () => {
  render(<CharacterCount />, {wrapper: App});
  const linkElement = screen.getByText(/Character Count/i);
  expect(linkElement).toBeInTheDocument();
});
