import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';
import { RecoilRoot } from 'recoil';

test('renders Echo: link', () => {
  render(<TextInput />, {wrapper: RecoilRoot});
  const textContent = screen.getByText(/Echo:/i);
  expect(textContent).toBeInTheDocument();
});
