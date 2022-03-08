import React, {useState, useEffect, useContext} from 'react';
import RandomMovie from '../RandomMovie/RandomMovie';
import './RandomMoviesCont.scss'
import { MovieListContext } from '../../context/MovieListContext';
import { Link } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const RandomMoviesCont = ({ }) => {


// ME FALTA ENCONTRAR LA FORMA DE GENERAR UNA PÁGINA AL AZAR A PARTIR DEL
// MAXIMO DE PAGINAS QUE LLEGAN data.total_pages DESPUES UN NUMERO AL AZAR
// ENTRE EL 1 Y EL 20, DE ESTA FORMA VOY A PODER CONTROLAR MEJOR LAS PELICULAS
// AL AZAR QUE LLEGAN, PUEDO BUSCAR LAS MAS POPULARES POR EJEMPLO O BUSCAR POR 
// LENGUAJE Y HACER UN SELECT QUE EN ONCHANGE CAMBIE EL LENGUAGE Y BUSQUE DE NUEVO!!

// TAMBIEN ESTARIA BUENO BUSCAR LA FORMA DE QUE EL USUARIO CREE SUS PROPIOS CHALLENGES

    const { setShowMovieList, setMovieID, movieID } = useContext(MovieListContext)

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'

    const [showMovieA, setShowMovieA] = useState(false);
    const [showMovieB, setShowMovieB] = useState(false);

    const [loadingA, setLoadingA] = useState(true);
    const [loadingB, setLoadingB] = useState(true);

    const [idMovieA, setIdMovieA] = useState();
    const [idMovieB, setIdMovieB] = useState();

    const [ language, setLanguage ] = useState('')

    const [ randomPage1, setRandomPage1 ] = useState(1)
    const [ randomPage2, setRandomPage2 ] = useState(1)

    const APIDiscover = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc&with_original_language=${language}`
    // const APIDiscoverPages = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc&with_original_language=${language}&page=${randomPage}`
    const APIA = `https://api.themoviedb.org/3/movie/${idMovieA}?api_key=${API_KEY}&include_adult=false`
    const APIB = `https://api.themoviedb.org/3/movie/${idMovieB}?api_key=${API_KEY}&include_adult=false`

    const [aMovie, setAMovie] = useState({})
    const [bMovie, setBMovie] = useState({})

    const randomLimit = 10000;

function validateMovie(data, randomFunction, functionMovie, loading){
    data.title === undefined || data.poster_path === undefined || data.popularity < 5  ?
    randomFunction() :
    functionMovie(data)
    loading(false) 
}

    // useEffect(()=>{
    //     if (showMovieA === true){
    //         ( async function(){
                
    //             setLoadingA(true)
    //             let data = await fetch(APIA).then(res=> res.json())
    //             validateMovie(data, getRandomA ,setAMovie, setLoadingA)
    //         })();
    //     }
    // },[idMovieA])

    // useEffect(()=>{
    //     if (showMovieB === true){
    //         ( async function(){
                
    //             setLoadingB(true)
    //             let data = await fetch(APIB).then(res=> res.json());
    //             validateMovie(data, getRandomB ,setBMovie, setLoadingB)
    //         })();
    //     }
    // },[idMovieB])


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
    setMovieID(idMovieA)
}

///// NUEVO METODO


function getRandomMovie(randomPageNumber, setMovie, setShowMovie, setLoading, setIdMovie){
    ( async function(){
        setLoading(true)
        let data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc&with_original_language=${language}&page=${randomPageNumber}`).then(res=> res.json());
        let randomMovieNumber = Math.floor(Math.random() * data.results.length)
        setMovie(data.results[randomMovieNumber]);
        setShowMovie(true)
        setLoading(false)
        setIdMovie(data.results[randomMovieNumber].id)
    })();
}

// useEffect(()=>{

//         ( async function(){
//             let data = await fetch(APIDiscover).then(res=> res.json());
//             let pagesLimit;
//             data.total_pages >= 500 ? pagesLimit= 500 : pagesLimit = data.total_pages
//             let randomPageNumber = Math.floor(Math.random()* pagesLimit + 1)
//             setRandomPage(randomPageNumber)
            
            
            
            
//         })();
//     },[language])

    function getMovieA(){
        ( async function(){
            let data = await fetch(APIDiscover).then(res=> res.json());
            let pagesLimit;
            data.total_pages >= 500 ? pagesLimit= 500 : pagesLimit = data.total_pages
            let randomPageNumber = Math.floor(Math.random()* pagesLimit + 1)
            getRandomMovie(randomPageNumber, setAMovie, setShowMovieA, setLoadingA, setIdMovieA)
        })();
    }
    function getMovieB(){
        ( async function(){
            let data = await fetch(APIDiscover).then(res=> res.json());
            let pagesLimit;
            data.total_pages >= 500 ? pagesLimit= 500 : pagesLimit = data.total_pages
            let randomPageNumber = Math.floor(Math.random()* pagesLimit + 1)
            getRandomMovie(randomPageNumber, setBMovie, setShowMovieB, setLoadingB, setIdMovieB)

            
        })();
    }

    useEffect(()=>{
        idMovieA === idMovieB && showMovieB ? getMovieB() : <></>
    },[idMovieB])

    useEffect(()=>{
        idMovieA === idMovieB && showMovieA ? getMovieA() : <></>
    },[idMovieA])

    function getMovies(){
        getMovieA()
        getMovieB()

    }
function inverseMovies(){
    let movieA = aMovie;
    let movieB = bMovie;

    let movieAId= idMovieA;
    let movieBId = idMovieB;

    setIdMovieA(movieBId)
    setIdMovieB(movieAId)
    setBMovie(movieA)
    setAMovie(movieB)
}


  return <>
        <div className="randommovie-cont">
            <div className="title">
                <h2>You can pick two movies at random:</h2>
                <LanguageSelect setLanguage={setLanguage}/>
            </div>
            {/* <select onChange={changeLanguage} name="Languages" id="">
                <option value="en">EN</option>
                <option value="es">ES</option>
            </select> */}
            <div className="randommovies-img">
                <div className="movie_cont">
                    <RandomMovie movie={aMovie} loading={loadingA} show={showMovieA} msg={'from'} clickFn={getRandomA}/>
                    <span className="changeIcon" onClick={getMovieA}><ChangeCircleIcon className="icon" /></span>
                </div>
                <div className="button_cont">
                    <button onClick={getMovies}><ShuffleIcon className="icon"/></button>
                    { !loadingA && !loadingB ? 
                    <span onClick={inverseMovies}><SwitchRightIcon className="icon"/></span>
                        : <></>
                }
                </div>
                <div className="movie_cont">
                    <RandomMovie movie={bMovie} loading={loadingB} show={showMovieB} msg={'to'}/>
                    <span className="changeIcon" onClick={getMovieB}><ChangeCircleIcon className="icon" /></span>
                </div>
            </div>

                { !loadingA && !loadingB ? 
                
                <>
                <button className="play" 
                onClick={()=>startGame()}
                > <Link to={`/play/${idMovieA}/${idMovieB}`}>PLAY</Link> </button> 
                
                </>
                
                : <></> 
                
                }
        </div>
  </>
  
};

export default RandomMoviesCont;
