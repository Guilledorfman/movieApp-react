import React, { useEffect, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import MovieEndCont from '../MovieEndCont/MovieEndCont';
import MovieStartCont from '../MovieStartCont/MovieStartCont';
import TimeLineCont from '../TimeLineCont/TimeLineCont';

import './MainCont.scss'

import { useParams } from 'react-router-dom'

const MainCont = () => {
  
  const { endGame, setMovieID } = useContext(MovieListContext)

    const { from, to } = useParams();

    useEffect(()=>{
      setMovieID(from)

    },[from])


  return (

      <div className="maincont">
      { endGame ? <TimeLineCont/> : 
        <>
          <MovieEndCont movie_ID={to}/>
          <MovieStartCont movie_ID={from}/>
        </>
      }
    </div>
  );
};

export default MainCont;
