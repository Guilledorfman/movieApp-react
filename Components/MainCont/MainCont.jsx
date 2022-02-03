import React, {useState, useEffect, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import CreditsCont from '../CreditsCont/CreditsCont';
import MovieEndCont from '../MovieEndCont/MovieEndCont';
import MovieListCont from '../MovieListCont/MovieListCont';
import MovieStartCont from '../MovieStartCont/MovieStartCont';

const MainCont = () => {

    const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID,compareIds, personID } = useContext(MovieListContext)


    function changeActive(e){
        setActiveDisplay(e)
    }


    function renderSwitch(param){
        switch(param) {
            case 'movie':
                return(<MovieStartCont movie_ID={movieID}/>);
                break;
            case 'creditsList':
                return(<CreditsCont movie_ID={movieID}/>);
                break;
            case 'movieList':
                return(<MovieListCont id={personID}/>);
                break;
        }
    }

  return (

      <>
        <MovieEndCont/>
      { 
        renderSwitch(activeDisplay)
    }
        <button onClick={()=>changeActive('movie')}>MOVIE</button>
        <button onClick={()=>changeActive('creditsList')}>CREDITS LIST</button>
    </>
  );
};

export default MainCont;
