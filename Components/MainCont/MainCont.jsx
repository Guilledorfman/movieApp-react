import React, { useEffect, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import MovieEndCont from '../MovieEndCont/MovieEndCont';
import MovieStartCont from '../MovieStartCont/MovieStartCont';
import TimeLineCont from '../TimeLineCont/TimeLineCont';

import './MainCont.scss'

import { useParams } from 'react-router-dom'
import PreviousStep from '../PreviousStep/PreviousStep';

const MainCont = () => {
  
  const { endGame, setMovieID, timeLine } = useContext(MovieListContext)

    const { from, to } = useParams();

    useEffect(()=>{
      setMovieID(from)

    },[from])


  return (

      <div className="maincont">
      { endGame ? <TimeLineCont/> : 
        <>
          <PreviousStep lastStep={timeLine}/>
          <MovieStartCont movie_ID={from}/>
          <MovieEndCont movie_ID={to}/>
        </>
      }
    </div>
  );
};

export default MainCont;
