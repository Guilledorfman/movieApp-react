import React from 'react';

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

    let IMG_PATH
    movie.poster_path === null ? IMG_PATH = "https://res.cloudinary.com/dxoqq4yvo/image/upload/v1646695857/movie2movie/movieposternotfound_ry1cc0.png" : IMG_PATH = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

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
        <div className={msg}>
            <b>{msg}:</b>
            {movie.original_language === 'en' ?  <h3>{movie.title}</h3> : 
            <>
              <h3>{movie.original_title}</h3>
              <i>({movie.title})</i>
            </>
            
            }
            {movie.release_date === undefined ? <></> :
            <h5>{movie.release_date.slice(0,4)}</h5>
            
            }
        </div>
        <img className="randomImg" src={IMG_PATH} alt="" />
      </>
      }
      
      </div>
};

export default RandomMovie;
