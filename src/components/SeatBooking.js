import React, { useState } from 'react';
import './SeatBooking.css'; // Importing the CSS for styling

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  
  const seats = Array.from({ length: 50 }, (_, i) => i + 1);

  
  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="seat-selection" id="seat">
      <h1>Select Your Seats</h1>
      <div className="seat-grid">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <h2>
        {selectedSeats.length > 0
          ? `You have selected: ${selectedSeats.join(', ')}`
          : 'No seats selected'}
      </h2>
     <a href="#contact-details"> <button className="proceed-button"  disabled={selectedSeats.length === 0}>
        Confirm
      </button></a>
    </div>
  );
};

export default SeatSelection;
