import React, {useState, useEffect, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';


import MovieStart from '../MovieStart/MovieStart';
import './MovieStartCont.css'


const MovieStartCont = ({movie_ID}) => {


    const { showMovieList, getFetch, movieList } = useContext(MovieListContext)

    const [movieID, setMovieID] = useState(movie_ID)
    const [movie, setMovie] = useState({});

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const API = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&include_adult=false`

    useEffect(()=>{

        getFetch(API)

    },[movieID])

    useEffect(()=>{
      setMovie(movieList)
    },[movieList])

  return (
      
        <div>
            <MovieStart data={movie} id={movie.id}/>
        </div>
  )
};

export default MovieStartCont;
