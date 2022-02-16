import React, {useEffect, useState, useContext} from 'react'
import MovieEnd from '../MovieEnd/MovieEnd'
import './MovieEndCont.css'
import { MovieListContext } from '../../context/MovieListContext';

const MovieEndCont = ({movie_ID}) => {
    const { setGoalMovie } = useContext(MovieListContext)
    
    const [movie, setMovie] = useState({});


    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const API = `https://api.themoviedb.org/3/movie/${movie_ID}?api_key=${API_KEY}&include_adult=false`

    useEffect(()=>{

        (async function(){

            let data = await fetch(API).then(res=> res.json());
            setMovie(data);
            const IMG_PATH = `https://image.tmdb.org/t/p/w500${data.poster_path}`

            setGoalMovie(
                {
                    img: IMG_PATH,
                    title: data.title,
                    subtitle: data.release_date,
                    id: data.id
                }
                )

      
          })();
    },[movie_ID])


    return (
        <div className="moviecont">
            <MovieEnd data={movie} id={movie.id}/>
        </div>
    )
}

export default MovieEndCont
