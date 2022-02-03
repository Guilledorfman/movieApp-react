import React, {useEffect, useState, useContext} from 'react'
import MovieEnd from '../MovieEnd/MovieEnd'
import './MovieEndCont.css'
import { MovieListContext } from '../../context/MovieListContext';

const MovieEndCont = () => {
    const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID, endMovieID, setEndMovieID, personID } = useContext(MovieListContext)
    
    const [movie_ID, setMovie_ID] = useState(endMovieID)
    
    const [movie, setMovie] = useState({});

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const API = `https://api.themoviedb.org/3/movie/${movie_ID}?api_key=${API_KEY}&include_adult=false`

    useEffect(()=>{

        (async function(){

            let data = await fetch(API).then(res=> res.json());
            setMovie(data);
      
          })();
    },[movie_ID])


    return (
        <div className="moviecont">
            <MovieEnd data={movie} id={movie.id}/>
        </div>
    )
}

export default MovieEndCont
