import { render } from '@testing-library/react';

import App from './App';

test('renders main page', () => {
  const { container } = render(<App />);
  expect(container).toHaveClass("Navbar");
});
