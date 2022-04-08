import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  const { container } = render(<App />);
  expect(screen.getByText(/Welcome to the Pokédex!/i)).toBeInTheDocument();
  expect(container.firstChild?.firstChild).toHaveClass("App-header");
  expect(container.firstChild?.firstChild?.firstChild).toHaveClass("App-logo");
});
