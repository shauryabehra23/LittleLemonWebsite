import React from 'react';

function Reservations({ reservation }) {
  // Theme colors
  const theme = {
    primary: '#495E57', // dark green
    accent: '#F4CE14',  // yellow
    textLight: '#FFFFFF'
  };

  // Container style
  const containerStyle = {
    maxWidth: '500px',
    margin: '3rem auto',
    padding: '2rem',
    marginBottom: '8rem',
    backgroundColor: theme.primary,
    color: theme.textLight,
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  };

  const titleStyle = {
    color: theme.accent,
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.8rem'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    padding: '0.6rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.2)'
  };

  const strongStyle = {
    color: theme.accent
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: theme.textLight
  };

  if (!reservation) {
    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>No reservation found</h2>
        <p style={textStyle}>
          Please book a table to see your reservation details here.
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Your Reservation</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}><strong style={strongStyle}>Name:</strong> {reservation.name}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Date:</strong> {reservation.date}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Time:</strong> {reservation.time}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Guests:</strong> {reservation.guests}</li>
        <li style={listItemStyle}><strong style={strongStyle}>Occasion:</strong> {reservation.occasion}</li>
      </ul>
    </div>
  );
}

export default Reservations;
