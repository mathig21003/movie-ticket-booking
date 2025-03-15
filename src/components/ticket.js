import React, { useState } from 'react';
import './ticket.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='rig'>
        <h1>ONLINE MOVIE TICKET BOOKING</h1>
        
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ol>
          <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#Movie Details" onClick={toggleMenu}>MOVIE DETAILS</a></li>
          <li><a href="#Seat Selection" onClick={toggleMenu}>SEAT SELECTION</a></li>
          <li><a href="#Payment" onClick={toggleMenu}>PAYMENT</a></li>
      
         
        </ol>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
