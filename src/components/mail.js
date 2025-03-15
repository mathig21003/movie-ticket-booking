
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './mail.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '', email: '', message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_f1gejk8';
    const templateID = 'template_tu0p34a';
    const userID = 'cnH2tmy4MSNyTKNv3';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert("Message sent!");
        setFormData({ from_name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert("Failed to send message.");
      });
  };

  return (
    <>
    <div class="bg-contact" id="contact-details">
    <section id="contact">
      <h2>MOVIE TICKET FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Name:</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          /> */}
           <div className="form-group">
          <label htmlFor="movie">Select Movie:</label>
          <select
            id="movie"
            name="movie"
            value={formData.movie}
            onChange={handleChange}
          >
            <option value="The Avengers">Alaipayuthey</option>
            <option value="Inception">Kannathil Muthamital</option>
            <option value="Toy Story">Katru veliyadai</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="seats">Number of Seats:</label>
          <input
            type="number"
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

          <button type="submit">Book Now</button>
        </div>
      </form>
    </section>
    </div>
    </>
  );
};

export default Contact;