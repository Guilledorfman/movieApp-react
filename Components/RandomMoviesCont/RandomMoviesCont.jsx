import React, {useState, useEffect, useContext} from 'react';
import RandomMovie from '../RandomMovie/RandomMovie';
import './RandomMoviesCont.css'
import { MovieListContext } from '../../context/MovieListContext';

const RandomMoviesCont = ({movieA, movieB, setSelected}) => {

    const { showMovieList, getFetch, movieList, setMovieID, setEndMovieID, setActiveDisplay } = useContext(MovieListContext)

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'

    const [loadingA, setLoadingA] = useState(true);
    const [loadingB, setLoadingB] = useState(true);

    const [idMovieA, setIdMovieA] = useState(movieA);
    const [idMovieB, setIdMovieB] = useState(movieB);


    const APIA = `https://api.themoviedb.org/3/movie/${idMovieA}?api_key=${API_KEY}&include_adult=false`
    const APIB = `https://api.themoviedb.org/3/movie/${idMovieB}?api_key=${API_KEY}&include_adult=false`

    const [aMovie, setAMovie] = useState({})
    const [bMovie, setBMovie] = useState({})

    //     useEffect(()=>{
    //         aMovie.title === undefined ? <></> : 
    //         setLoadingA(false)
    // },[aMovie])
    //     useEffect(()=>{
    //         bMovie.title === undefined ? <></> : 
    //         setLoadingB(false)
    // },[bMovie])

    let IMG_PATH1 = `https://image.tmdb.org/t/p/w500${aMovie.poster_path}`;
    let IMG_PATH2 = `https://image.tmdb.org/t/p/w500${bMovie.poster_path}`;

    const randomLimit = 1000;

    useEffect(()=>{
        ( async function(){
            setLoadingA(true)
            let data = await fetch(APIA).then(res=> res.json());
            data.title === undefined || data.poster_path === undefined ? getRandomA() : <></>;
            setAMovie(data);
            setLoadingA(false)
        })();
    },[idMovieA])

    useEffect(()=>{
        ( async function(){
            setLoadingB(true)
            let data = await fetch(APIB).then(res=> res.json());
            data.title === undefined || data.poster_path === undefined ? getRandomB() : <></>;
            setBMovie(data)
            setLoadingB(false)


        })();
    },[idMovieB])

function getRandom(){
    let numeroRandom1 = Math.floor(Math.random()*randomLimit);
    let numeroRandom2 = Math.floor(Math.random()*randomLimit);
    
    numeroRandom1 === numeroRandom2 ? numeroRandom2 = Math.floor(Math.random()*randomLimit) : (setIdMovieA(numeroRandom1), setIdMovieB(numeroRandom2))
    
}

function getRandomA(){
    setLoadingA(true)
    let numeroRandom1 = Math.floor(Math.random()*randomLimit);
    numeroRandom1 === idMovieB ? numeroRandom1 = Math.floor(Math.random()*randomLimit) : (setIdMovieA(numeroRandom1))
    }
function getRandomB(){
    setLoadingB(true)
    let numeroRandom2 = Math.floor(Math.random()*randomLimit);
    numeroRandom2 === idMovieA ? numeroRandom2 = Math.floor(Math.random()*randomLimit) : (setIdMovieB(numeroRandom2))
    }

    function pickMovies(a, b){
        setMovieID(a);
        setEndMovieID(b);
        setSelected(true)
    }

  return <>
        <div className="randommovie-cont">
            <div className="randommovies-img">
                <RandomMovie movie={aMovie} loading={loadingA}/>
                <button onClick={()=>pickMovies(idMovieA, idMovieB)}>PLAY</button>
                <RandomMovie movie={bMovie} loading={loadingB}/>
            </div>
            <button onClick={getRandom}>GET RANDOM</button>
        </div>;
  </>
  
};

export default RandomMoviesCont;
