import { render, screen } from '@testing-library/react';
import CharacterCount from './CharacterCount';
import { RecoilRoot } from 'recoil';

test('renders Character Count link', () => {
  // wrapper is needed - will also work if wrapper is App
  render(<CharacterCount />, {wrapper: RecoilRoot});
  const textContent = screen.getByText(/Character Count/i);
  expect(textContent).toBeInTheDocument();
});
