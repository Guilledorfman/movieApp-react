import React, {useEffect, useState} from 'react'
import './MovieEnd.css'

const MovieEnd = ({data, id}) => {
    
    const IMG_PATH = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const [movieID, setMovieId] = useState(id);



    const [movieCredits, setMovieCredits] = useState({})

    useEffect(()=>{
        setMovieId(data.id);
        // (async function(){
        //     const response = await fetch (`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`)
        //     const data = await response.json()
        //     setMovieCredits(data);
        //     console.log(data);
      
        //   })();
    },[movieID])
    
     const getCredits = async function(){
        
            const response = await fetch (`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`)
            const data = await response.json()
            setMovieCredits(data);
            console.log(movieCredits);
      

    }
    return (
        <div className="movie">
            <div className="movie-info">
                <h2>{data.title}</h2>
                <h3>{data.release_date}</h3>
            </div>
            <img className="movie-img" onClick={getCredits} src={IMG_PATH} alt={data.title}/>
        </div>
    )
}

export default MovieEnd
