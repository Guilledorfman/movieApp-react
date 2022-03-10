import React, { useEffect, useState } from 'react'
import './MovieEnd.scss'

const MovieEnd = ({data, id}) => {


    let IMG_PATH;
    let BACKDROP_PATH;
    data.poster_path === null ? IMG_PATH = 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1646695857/movie2movie/movieposternotfound_ry1cc0.png' : IMG_PATH = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    data.backdrop_path === null ? BACKDROP_PATH = 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1646935386/movie2movie/a0000430_main_v4vhgz.jpg' : BACKDROP_PATH = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`

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
            {data.original_language === 'en' ?  <h3>{data.title}</h3> : 
            <>
              <h3>{data.original_title}</h3>
              <i>({data.title})</i>
            </>
            
            }
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
