import { screen } from '@testing-library/react';

test('renders navbar', () => {
    expect(screen.queryByRole("navbar")).toBeDefined();
    expect(screen.queryByRole("dark-shadow")).toBeDefined();
});
