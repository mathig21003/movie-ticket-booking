import React from 'react';
import './movie.css'; 
const movies = [
  {
    id: 1,
    title: 'Action Film',
  
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QHs_L0jmzsq8x6iiOq4bqc2Lz5ePwpM7NQ&s',
  },
  {
    id: 2,
    title: 'Comedy Film', 
   
    poster: 'https://static.toiimg.com/photo/95668868.cms',
  },
  {
    
    id: 3,
    title: 'Horrier Film',
    
    poster: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c16fe159247999.639aa1343d25e.jpg' ,
  },
  {
    id: 3,
    title: 'Thirller Film',
   
    poster: 'https://static.toiimg.com/photo/89146368.cms',
  },
];


const Home = () => {
  return (
    <div className="home-container">
      <h1 id="home" >Film Genre</h1>
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
