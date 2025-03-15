import React from 'react';
import Navbar from './components/ticket';
import Home from './components/movie';
// import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatBooking';
import MovieBox from './components/New Movie';  
import Contact from './components/mail';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieBox />  
      <Home />
      {/* <MovieDetails/> */}
      <SeatSelection />
      <Contact />
    </div>
  );
};

export default App;
