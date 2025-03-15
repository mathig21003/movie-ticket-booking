import React from 'react';
import './New Movie.css';
const MovieBox = () => {  // Changed from NewMovie to MovieBox
  return (
   
    <>
    <div className="moviebox">
        
      <div className='movie'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMj3xUJO_n3REgdTrcgE7pjvmS33GlbS7rQ0EplnsT4ErTs6uQwDRbz-_2-FCjlKmMO1A&usqp=CAU" alt="Movie Poster" height="300px" width="200px" />
       <h3>Guru</h3>
       <a href="#seat" ><button type="submit" className="submit-button">
          Book Now
        </button></a>

      </div>
      <div className='movie'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQ23-m9RWAqAQLM8WtZFxc81BAcT1DoSWIJKCVLWj6zFqQ3av0-3IUqgwBj-cQxweMRE&usqp=CAU" alt="Movie Poster" height="300px" width="200px"/>
       <h3>Kahaani2</h3>
       <a href="#seat" ><button type="submit" className="submit-button">
          Book Now
        </button></a>
      </div> <div className='movie'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGgF7pvan-3i1X1qgAii8iyVI4mg5TRD6y6C1lhOZiY8kQ1HlFVsu0Si2tTkwt18iMcg&usqp=CAU" alt="Movie Poster" height="300px" width="200px"  />
     <h3>Alaipayuthey</h3>
     <a href="#seat" ><button type="submit" className="submit-button">
          Book Now
        </button></a>
      </div> <div className='movie'>
        <img src="https://cdn.cinematerial.com/p/297x/px8heirc/ponniyin-selvan-part-one-indian-movie-poster-md.jpg?v=1646313123" alt="Movie Poster" height="300px" width="200px" />
        <h3>Ponniyin Selvan-1</h3>
        <a href="#seat" ><button type="submit" className="submit-button">
          Book Now
        </button></a>
      </div>
     
    </div>

    <div className="moviebox">
      <div className='movie'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZ5sEzVBZTBV7uqT8fqvqlDHNxHttecF7Qw&s" alt="Movie Poster" height="300px" width="200px" />
        <h3>Kandukondain</h3>
        <a href="#seat" ><button type="submit" className="submit-button">
          Book Now
        </button></a>
      </div>
      <div className='movie'>
        <img src="https://upload.wikimedia.org/wikipedia/ta/thumb/c/c0/Kannathilfrontbig.jpg/250px-Kannathilfrontbig.jpg" alt="Movie Poster" height="300px" width="200px"/>
        <h3>Run</h3>
        <a href="#seat" ><button type="submit" className="submit-button">
          Book Now
        </button></a>
        
      </div> <div className='movie'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlHo731aXPH7vV_bjQ6_RLcF5A373BT_Kbw&s" alt="Movie Poster" height="300px" width="200px" />
        <h3>Kannathilmuthamita</h3>
        <a href="#seat" ><button type="submit" className="submit-button">
          Book Now
        </button></a>
        
      </div> <div className='movie'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0UPrciDDXrByyXQVSiwLC2etOpyzBULD8g&s" alt="Movie Poster" height="300px" width="200px"/>
        <h3>Katru veliyidai</h3>
        <a href="#seat" ><button type="submit" className="submit-button">
          Book Now
        </button></a>
       
      </div>
     
    </div>
    </>

    

  

  );
};

export default MovieBox;  // Changed from NewMovie to MovieBox
