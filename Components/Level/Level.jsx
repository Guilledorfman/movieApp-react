import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Level.scss'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';

const Level = ({movieA, movieB}) => {
    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const APIA = `https://api.themoviedb.org/3/movie/${movieA}?api_key=${API_KEY}&include_adult=false`
    const APIB = `https://api.themoviedb.org/3/movie/${movieB}?api_key=${API_KEY}&include_adult=false`

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


  return <>
            <Link className='level' to={`/play/${movieA}/${movieB}`}>

 

                <div className="level1">

                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>

                    <div className="lvl-info info1">
                        { aMovie.title === undefined ? <></> :
                        <>  
                            <b>FROM</b>
                            <span className="spantitle">
                                <StarIcon className="star"/>
                                <h3>{aMovie.title}</h3>
                            </span>
                                <h4>-{aMovie.release_date.slice(0,4)}-</h4>
                            
                        </>
                        }
                    </div>
                    <span className="spanimg">
                        <img src={IMG_PATH1}  alt="" />
                        <StarIcon className="star"/>
                    </span>
                </div>
                <b>
                    <ArrowForwardIosIcon className="icon"/>
                </b>
                <div className="level2">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                    <span className="spanimg">
                        <StarIcon className="star"/>
                        <img src={IMG_PATH2}  alt="" />
                    </span>
                    <div className="lvl-info info2">
                    { bMovie.title === undefined ? <></> :
                        <>  
                            <b>TO</b>
                            <span className="spantitle">
                                <h3>{bMovie.title}</h3>
                                <StarIcon className="star"/>
                            </span>
                            <h4>-{bMovie.release_date.slice(0,4)}-</h4>
                        </>
                        }
                    </div>
                    
                </div>
            </Link>
        </>;
};

export default Level;
