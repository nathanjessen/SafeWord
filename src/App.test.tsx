import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 text', () => {
  render(<App />);
  const h1Element = screen.getByRole('heading', { level: 1 });
  expect(h1Element).toHaveTextContent('SafeWord');
});
