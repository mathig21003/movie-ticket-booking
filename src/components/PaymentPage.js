// MovieTicketForm.js

import React, { useState } from 'react';
import './PaymentPage.css'; // Import the CSS for styling

const MovieTicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    movie: 'The Avengers',
    seats: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${formData.name}!`);
    // Here, you could also send the formData to a server
  };

  return (
    <div className="form-container" id="Payment">
      <h1>Movie Ticket Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

       
        <button type="submit" className="submit-button">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default MovieTicketForm;
