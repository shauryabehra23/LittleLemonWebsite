import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Book from './Book';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI } from './api'; // Your API module
import { initializeTimes, updateTimes } from './App'; // Adjust paths

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

test('renders Book component', () => {
  render(
    <MemoryRouter>
      <Book dispatch={() => {}} availableTimes={[]} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Book a Table/i)).toBeInTheDocument();
});

test('initialise times', () => {
  render(
    <MemoryRouter>
      <ConfirmedBooking />
    </MemoryRouter>
  );
  expect(screen.getByText(/Booking Confirmed!/i)).toBeInTheDocument();
});

jest.mock('./api'); // Mock the entire api module

describe('initializeTimes', () => {
  it('returns a non-empty array of available times', () => {
    // Mock fetchAPI to return a sample array
    fetchAPI.mockReturnValue(['17:00', '17:30', '18:00']);

    const times = initializeTimes();

    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });
});

describe('updateTimes reducer', () => {
  it('returns a non-empty array of times for a given date', () => {
    // Mock fetchAPI again
    fetchAPI.mockReturnValue(['18:00', '19:00']);

    // Pretend the selected date is '2025-08-12'
    const action = { type: 'UPDATE_TIMES', date: '2025-08-12' };
    const state = []; // initial state (could be empty array)

    const updatedTimes = updateTimes(state, action);

    expect(Array.isArray(updatedTimes)).toBe(true);
    expect(updatedTimes.length).toBeGreaterThan(0);
  });
});
