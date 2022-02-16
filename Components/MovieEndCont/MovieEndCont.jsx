import React, {useEffect, useState, useContext} from 'react'
import MovieEnd from '../MovieEnd/MovieEnd'
import './MovieEndCont.css'
import { MovieListContext } from '../../context/MovieListContext';

const MovieEndCont = ({movie_ID}) => {
    const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID, goalMovie, setGoalMovie, endMovieID, setEndMovieID, personID, addToTimeLine } = useContext(MovieListContext)
    
    // const [movie_ID, setMovie_ID] = useState(endMovieID)
    
    const [movie, setMovie] = useState({});


    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const API = `https://api.themoviedb.org/3/movie/${movie_ID}?api_key=${API_KEY}&include_adult=false`

    useEffect(()=>{

        (async function(){

            let data = await fetch(API).then(res=> res.json());
            setMovie(data);
            const IMG_PATH = `https://image.tmdb.org/t/p/w500${data.poster_path}`

            // addToTimeLine(IMG_PATH, data.title, data.release_date, data.id)
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
