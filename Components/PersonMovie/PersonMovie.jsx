import React, {useState, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';


const PersonMovie = ({name, img, movie_id}) => {
  const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID, personID } = useContext(MovieListContext)
  
  function pickMovie(id){
    setMovieID(id)
    setActiveDisplay('movie')

  }
  return (
  
    <div onClick={()=>pickMovie(movie_id)}>
      <img src={img}></img>
      {name}
    </div>
    
    );
};

export default PersonMovie;
