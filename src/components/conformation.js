import React from 'react';
import './conformation.css';
const Confirmation = () => {
  const bookingDetails = {/* Mock booking details */};

  return (
    <div>
      <h1>Booking Confirmed</h1>
      <h2>Movie: {bookingDetails.movieTitle}</h2>
      <p>Showtime: {bookingDetails.showtime}</p>
      <p>Seats: {bookingDetails.seats.join(', ')}</p>
      <p>Total: ${bookingDetails.total}</p>
      <button>Download Ticket</button>
    </div>
  );
};

export default Confirmation;