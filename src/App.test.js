import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add Todo input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add todo here/i);
  expect(inputElement).toBeInTheDocument();
});
