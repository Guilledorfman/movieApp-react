import React, { useContext } from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import './PersonMovie.scss'


const PersonMovie = ({name, img, movie_id}) => {
  const { setShowMovieList, setMovieID, compareIDs } = useContext(MovieListContext)
  
  function pickMovie(id){
    
    setMovieID(id)
    setShowMovieList(false);
    compareIDs(id);

  }
  return (
  
    <div className="personmovie" onClick={()=>pickMovie(movie_id)}>
      <img src={img}></img>
        <h2>{name}</h2>
    </div>
    
    );
};

export default PersonMovie;
