import React, { useEffect, useState } from 'react'
import './MovieEnd.scss'

const MovieEnd = ({data, id}) => {

    
    const IMG_PATH = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    const BACKDROP_PATH = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
    const [movieID, setMovieId] = useState(id);


    useEffect(()=>{
        setMovieId(data.id);
    },[movieID])

    

    return (
        <div className="endmovie">
            <b className="goal">Goal</b>
            {data.title === undefined ? <></> : 
            <>
                <div style={{backgroundImage : `url(${BACKDROP_PATH})`}} className="movie">
                    <div className="movie-info">
                        <h2>{data.title}</h2>
                        {data.original_language === 'en' ?  <></> : <i>({data.original_title})</i>}
                        <h3>{data.release_date.slice(0,4)}</h3>
                        
                    </div>
                    <img className="movie-img" src={IMG_PATH} alt={data.title}/>
                </div>
            </>
            }
        </div>
    )
}

export default MovieEnd
