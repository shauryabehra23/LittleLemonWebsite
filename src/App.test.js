import { render, screen } from '@testing-library/react';
import Book from './Book';

// 👈 Add the mock here, before your tests
beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

// Your tests can go below
test('renders Book component', () => {
  render(<Book dispatch={() => {}} availableTimes={[]} />);
  expect(screen.getByText(/Book a Table/i)).toBeInTheDocument();
});
