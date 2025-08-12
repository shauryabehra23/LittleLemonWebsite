import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from './api'; // local copy of API.js

import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Reservations from './Reservations';
import Book from './Book';
import ConfirmedBooking from './ConfirmedBooking';
// 1. Initialize times for **today**
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// updateTimes reducer
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [reservation, setReservation] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />

        <Routes>
          <Route path="/" element={<Main availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path="/home" element={<Main availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservations" element={<Reservations reservation={reservation}/>} />
          <Route path="/order-online" element={<Book availableTimes={availableTimes} dispatch={dispatch} setReservation={setReservation} />} />
          <Route path="/confirm" element={<ConfirmedBooking />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
