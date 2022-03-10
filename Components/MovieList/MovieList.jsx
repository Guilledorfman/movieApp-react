import React from 'react';
import PersonMovie from '../PersonMovie/PersonMovie';
import './MovieList.css'

const MovieList = ({data}) => {

    const movieList = data.results.map(e=>{
        let IMG_PATH;
        e.poster_path === null ? IMG_PATH = "https://res.cloudinary.com/dxoqq4yvo/image/upload/v1646695857/movie2movie/movieposternotfound_ry1cc0.png" :  IMG_PATH = `https://image.tmdb.org/t/p/w500${e.poster_path}`
        return(
            <PersonMovie name={e.original_title} img={IMG_PATH} key={e.id} movie_id={e.id}/>
        )
    })

  return (
    
    <div className="MovieList_cont">
        {movieList}
    </div>
    
    );
};

export default MovieList;
