import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Book from './Book';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI } from './api';
import { initializeTimes, updateTimes } from './App';

beforeAll(() => {
  // Mock scrollIntoView to avoid errors in test environment
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

jest.mock('./api'); // Mock API functions

test('renders Book component', () => {
  render(
    <MemoryRouter>
      <Book
        dispatch={() => {}}
        availableTimes={['17:00', '18:00']}
        setReservation={() => {}}
      />
    </MemoryRouter>
  );
  expect(screen.getByText(/Book a Table/i)).toBeInTheDocument();
});

test('renders ConfirmedBooking component', () => {
  render(
    <MemoryRouter>
      <ConfirmedBooking />
    </MemoryRouter>
  );
  expect(screen.getByText(/Booking Confirmed!/i)).toBeInTheDocument();
});

describe('initializeTimes', () => {
  it('returns a non-empty array of available times', () => {
    fetchAPI.mockReturnValue(['17:00', '17:30', '18:00']);
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });
});

describe('updateTimes reducer', () => {
  it('returns a non-empty array for a given date', () => {
    fetchAPI.mockReturnValue(['18:00', '19:00']);
    const action = { type: 'UPDATE_TIMES', date: '2025-08-12' };
    const updatedTimes = updateTimes([], action);
    expect(Array.isArray(updatedTimes)).toBe(true);
    expect(updatedTimes.length).toBeGreaterThan(0);
  });
});

test('submits the booking form and calls setReservation', async () => {
  const mockSetReservation = jest.fn();
  window.alert = jest.fn(); // Mock alert call

  render(
    <MemoryRouter>
      <Book
        dispatch={() => {}}
        availableTimes={["17:00", "18:00"]}
        setReservation={mockSetReservation}
      />
    </MemoryRouter>
  );

  // Use userEvent directly without .setup()
  await userEvent.type(screen.getByLabelText(/Name/i), 'John Doe');
  await userEvent.type(screen.getByLabelText(/Date/i), '2025-08-15');
  await userEvent.selectOptions(screen.getByLabelText(/Time/i), '17:00');
  await userEvent.clear(screen.getByLabelText(/Number of Guests/i));
  await userEvent.type(screen.getByLabelText(/Number of Guests/i), '3');
  await userEvent.selectOptions(screen.getByLabelText(/Occasion/i), 'Birthday');

  await userEvent.click(screen.getByRole('button', { name: /Book Table/i }));

  // Verify setReservation was called with expected booking data
  expect(mockSetReservation).toHaveBeenCalledWith(
    expect.objectContaining({
      name: 'John Doe',
      date: '2025-08-15',
      time: '17:00',
      guests: '3',
      occasion: 'Birthday'
    })
  );

  expect(window.alert).toHaveBeenCalledTimes(1);
});
