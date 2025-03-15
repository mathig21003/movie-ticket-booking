import React from 'react';
import './MovieDetails.css'; 
const movies = [
  {
    id: 1,
    title: 'Kandukondain',
    genre: '9.00am-12.00pm',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZ5sEzVBZTBV7uqT8fqvqlDHNxHttecF7Qw&s',
  },
  {
    id: 2,
    title: 'Run',
    genre: '12.30pm-3.00pm',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlHo731aXPH7vV_bjQ6_RLcF5A373BT_Kbw&s',
  },
  {
    id: 3,
    title: 'Kanthilmuthamital',
    genre: '',
    poster: 'https://upload.wikimedia.org/wikipedia/ta/thumb/c/c0/Kannathilfrontbig.jpg/250px-Kannathilfrontbig.jpg',
  },
  {
    id: 3,
    title: 'Katru veliyadai',
    genre: '6.00pm-9.30pm',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0UPrciDDXrByyXQVSiwLC2etOpyzBULD8g&s',
  },
];


const Home = () => {
  return (
    <div className="home-container"  id="MovieDetails">
      <h1>Flim Genre</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-genre">{movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
