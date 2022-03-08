import React, { useEffect, useState } from 'react'
import './MovieEnd.scss'

const MovieEnd = ({data, id}) => {

    
    const IMG_PATH = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    const [movieID, setMovieId] = useState(id);


    useEffect(()=>{
        setMovieId(data.id);
    },[movieID])
    

    return (
        <div className="movie">
            <div className="movie-info">
                <h2>{data.title}</h2>
                <h3>{data.release_date}</h3>
            </div>
            <img className="movie-img" src={IMG_PATH} alt={data.title}/>
        </div>
    )
}

export default MovieEnd
