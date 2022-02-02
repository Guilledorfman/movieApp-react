import React, {useState, useEffect, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import CreditsCont from '../CreditsCont/CreditsCont';
import MovieStartCont from '../MovieStartCont/MovieStartCont';

const MainCont = () => {

    const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID } = useContext(MovieListContext)

    useEffect(()=>{
        // console.log(movieList);
    },[movieList])

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
        }
    }

  return (

      <>
      { 
        renderSwitch(activeDisplay)
      }
        <button onClick={()=>changeActive('movie')}>MOVIE</button>
        <button onClick={()=>changeActive('creditsList')}>CREDITS LIST</button>
    </>
  );
};

export default MainCont;
