import { screen } from '@testing-library/react';

test('renders main page', () => {
  expect(screen.queryByRole("navbar")).toBeDefined();
  expect(screen.queryByRole("dark-shadow")).toBeDefined();
});
