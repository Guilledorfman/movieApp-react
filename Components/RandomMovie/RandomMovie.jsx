import React, {useState, useEffect} from 'react';
import './RandomMovie.css'
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
display: block;
margin: auto;
background-color: black;
`;
const RandomMovie = ({movie, loading, show, clickFn}) => {


    let IMG_PATH = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  return <div className="randomMovie">
    { loading ? <>
      {
        show ?
        <div className="randomLoading">
          
        <PuffLoader color='white' loading={loading} css={override} size={100} />
      </div>

        :
        <div  onClick={clickFn} >
              <div className="randomLoading">
                <i className="fas fa-plus"></i>
              </div>
        </div>
      }
    
    
    </> : <></>}
      {movie === undefined ? <></> : 
      <>
        <div className="randomMovie-info">
            <h3>{movie.title}</h3>
            <h5>{movie.release_date}</h5>
        </div>
        <img className="randomImg" src={IMG_PATH} alt="" />
      </>
      }
      
      </div>
};

export default RandomMovie;
