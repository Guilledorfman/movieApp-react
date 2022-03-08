import React, {useState, useEffect, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import MovieListCont from '../MovieListCont/MovieListCont';


import MovieStart from '../MovieStart/MovieStart';
import './MovieStartCont.css'


const MovieStartCont = ({movie_ID}) => {

    const { getFetch, movieList,setMovieID, showMovieList, personID, movieID } = useContext(MovieListContext)


    const [movie, setMovie] = useState({});

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const API = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&include_adult=false`


    useEffect(()=>{
        movieID === 1 ? setMovieID(movie_ID) :  
        getFetch(API)

    },[movieID])


    useEffect(()=>{
      setMovie(movieList)
    },[movieList])

  return (
      
        <div>
          { showMovieList ? <MovieListCont id={personID}/> : <MovieStart data={movie} id={movie.id}/> }
            
            
        </div>
  )
};

export default MovieStartCont;
