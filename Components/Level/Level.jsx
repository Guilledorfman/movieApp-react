import React, {useContext, useEffect, useState} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import './Level.css'

const Level = ({movieA, movieB, setSelected}) => {
    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const APIA = `https://api.themoviedb.org/3/movie/${movieA}?api_key=${API_KEY}&include_adult=false`
    const APIB = `https://api.themoviedb.org/3/movie/${movieB}?api_key=${API_KEY}&include_adult=false`

    const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID, endMovieID, setEndMovieID, personID } = useContext(MovieListContext)

    const [aMovie, setAMovie] = useState({})
    const [bMovie, setBMovie] = useState({})

    let IMG_PATH1 = `https://image.tmdb.org/t/p/w500${aMovie.poster_path}`;
    let IMG_PATH2 = `https://image.tmdb.org/t/p/w500${bMovie.poster_path}`;

    useEffect(()=>{

        ( async function(){
            let data = await fetch(APIA).then(res=> res.json());
            setAMovie(data);
        })();

    },[APIA])

    useEffect(()=>{

        ( async function(){
            let data = await fetch(APIB).then(res=> res.json());
            setBMovie(data);
        })();

    },[APIB])


    function pickMovies(a, b){
        setMovieID(a);
        setEndMovieID(b);
        setSelected(true)
    }

  return <div className='level' onClick={()=>pickMovies(movieA, movieB)}>
            <div className="level1">
                <div className="lvl-info info1">
                    <h3>{aMovie.title}</h3>
                    <h4>{aMovie.release_date}</h4>
                </div>
                <img src={IMG_PATH1}  alt="" />
            </div>
            <b>
                <i className="fas fa-arrow-right"></i>
            </b>
            <div className="level2">
                <img src={IMG_PATH2}  alt="" />
                <div className="lvl-info info2">
                    <h3>{bMovie.title}</h3>
                    <h4>{bMovie.release_date}</h4>
                </div>
                
            </div>
             
        </div>;
};

export default Level;
