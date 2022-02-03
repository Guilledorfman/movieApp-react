import React, {useState, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import './PersonMovie.css'


const PersonMovie = ({name, img, movie_id}) => {
  const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID,compareIDs, personID } = useContext(MovieListContext)
  
  function pickMovie(id){
    
    setMovieID(id)
    setActiveDisplay('movie')
    compareIDs(id);

  }
  return (
  
    <div className="personmovie" onClick={()=>pickMovie(movie_id)}>
      <img src={img}></img>
      {name}
    </div>
    
    );
};

export default PersonMovie;
