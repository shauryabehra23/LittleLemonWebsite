import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
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

// 1. Initialize times for **today**
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// 2. Reducer logic to update times when date changes
function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date)); // uses selected date
    default:
      return state;
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />

        <Routes>
          <Route path="/" element={<Main availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<Book availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
