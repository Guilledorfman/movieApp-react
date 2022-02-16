import React, { useEffect, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import MovieEndCont from '../MovieEndCont/MovieEndCont';
import MovieStartCont from '../MovieStartCont/MovieStartCont';
import TimeLineCont from '../TimeLineCont/TimeLineCont';

import { useParams } from 'react-router-dom'

const MainCont = () => {
  
  const { endGame, setMovieID } = useContext(MovieListContext)

    const { from, to } = useParams();

    useEffect(()=>{
      setMovieID(from)
    },[from])


  return (

      <>
      { endGame ? <TimeLineCont/> : 
        <>
          <MovieEndCont movie_ID={to}/>
          <MovieStartCont movie_ID={from}/>
        </>
      }
    </>
  );
};

export default MainCont;
