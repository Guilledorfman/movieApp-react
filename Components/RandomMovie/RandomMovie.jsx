import React, {useState, useEffect} from 'react';

import { css } from "@emotion/react";


import PuffLoader from "react-spinners/PuffLoader";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import './RandomMovie.scss'

const override = css`
display: block;
margin: auto;
`;
const RandomMovie = ({movie, loading, show, clickFn, msg}) => {


    let IMG_PATH = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  return <div className="randomMovie">
    { loading ? <>
      {
        show ?
        <div className="randomLoading">
          
        <PuffLoader color='gold' loading={loading} css={override} size={100} />
      </div>

        :
        <div  onClick={clickFn} >
              <div className="randomLoading">
                <LocalMoviesIcon sx={{ fontSize: 100 }}/>
              </div>
        </div>
      }
    
    
    </> : <></>}
      {movie.title === undefined || loading === true ? <></> : 
      <>
        <div className="randomMovie-info">
            <b>{msg}:</b>
            <h3>{movie.title}</h3>
            <h5>{movie.release_date.slice(0,4)}</h5>
        </div>
        <img className="randomImg" src={IMG_PATH} alt="" />
      </>
      }
      
      </div>
};

export default RandomMovie;
