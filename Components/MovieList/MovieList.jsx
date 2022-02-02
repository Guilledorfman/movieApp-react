import React from 'react';
import PersonMovie from '../PersonMovie/PersonMovie';

const MovieList = ({data}) => {
    console.log(data);
    const movieList = data.results.map(e=>{
        let IMG_PATH = `https://image.tmdb.org/t/p/w500${e.poster_path}`
        return(
            <PersonMovie name={e.original_title} img={IMG_PATH} key={e.id} movie_id={e.id}/>
        )
    })

  return (
    
    <>
        {movieList}
    </>
    
    );
};

export default MovieList;
