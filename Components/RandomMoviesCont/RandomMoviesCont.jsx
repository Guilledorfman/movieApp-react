import React, {useState, useEffect, useContext} from 'react';
import RandomMovie from '../RandomMovie/RandomMovie';
import './RandomMoviesCont.scss'
import { MovieListContext } from '../../context/MovieListContext';
import { Link } from 'react-router-dom';

const RandomMoviesCont = ({ movieA, movieB }) => {

    const { setShowMovieList } = useContext(MovieListContext)

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'

    const [showMovieA, setShowMovieA] = useState(false);
    const [showMovieB, setShowMovieB] = useState(false);

    const [loadingA, setLoadingA] = useState(true);
    const [loadingB, setLoadingB] = useState(true);

    const [idMovieA, setIdMovieA] = useState(movieA);
    const [idMovieB, setIdMovieB] = useState(movieB);


    const APIA = `https://api.themoviedb.org/3/movie/${idMovieA}?api_key=${API_KEY}&include_adult=false`
    const APIB = `https://api.themoviedb.org/3/movie/${idMovieB}?api_key=${API_KEY}&include_adult=false`

    const [aMovie, setAMovie] = useState({})
    const [bMovie, setBMovie] = useState({})

    const randomLimit = 1000;

    useEffect(()=>{
        if (showMovieA === true){
            ( async function(){
    
                setLoadingA(true)
                let data = await fetch(APIA).then(res=> res.json());
                data.title === undefined || data.poster_path === undefined ? getRandomA() : <></>;
                setAMovie(data);
                setLoadingA(false)
                
               
                
            })();
        }
    },[idMovieA])

    useEffect(()=>{
        if (showMovieB === true){
            ( async function(){
                setLoadingB(true)
                let data = await fetch(APIB).then(res=> res.json());
                data.title === undefined || data.poster_path === undefined ? getRandomB() : <></>;
                setBMovie(data)
                setLoadingB(false)


            })();
        }
    },[idMovieB])

function getRandom(){
    setShowMovieA(true)
    setShowMovieB(true)
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
function startGame(){
    setShowMovieList(false);
}

  return <>
        <div className="randommovie-cont">
            <h2>You can pick two movies at random:</h2>
            <div className="randommovies-img">
                <RandomMovie movie={aMovie} loading={loadingA} show={showMovieA} msg={'from'} clickFn={getRandomA}/>
                    <button onClick={getRandom}>GET TWO RANDOM MOVIES</button>
                <RandomMovie movie={bMovie} loading={loadingB} show={showMovieB} msg={'to'}/>
            </div>

                { showMovieA && showMovieB ? <button className="play" 
                onClick={()=>startGame()}
                > <Link to={`/play/${idMovieA}/${idMovieB}`}>PLAY</Link> </button> : <></> }
        </div>
  </>
  
};

export default RandomMoviesCont;
