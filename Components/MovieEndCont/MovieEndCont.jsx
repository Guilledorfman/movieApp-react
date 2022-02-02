import React, {useEffect, useState} from 'react'
import MovieEnd from '../MovieEnd/MovieEnd'
import './MovieEndCont.css'

const MovieEndCont = () => {

    const [movieID, setMovieID] = useState(128)
    const [movie, setMovie] = useState({});

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const API = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&include_adult=false`

    useEffect(()=>{

        (async function(){

            let data = await fetch(API).then(res=> res.json());
            setMovie(data);
      
          })();
    },[movieID])


    return (
        <div className="moviecont">
            <MovieEnd data={movie} id={movie.id}/>
        </div>
    )
}

export default MovieEndCont
